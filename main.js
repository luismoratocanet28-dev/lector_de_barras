// Use global variables from CDNs
const { Html5QrcodeScanner } = window;
const { createIcons, CheckCircle2, Copy, RefreshCw, History, Download, Trash2, ExternalLink } = lucide;

// Initialize Icons
createIcons({
  icons: {
    CheckCircle2,
    Copy,
    RefreshCw,
    History,
    Download,
    Trash2,
    ExternalLink
  }
})

// State Management
let history = JSON.parse(localStorage.getItem('scanHistory') || '[]')
let html5QrcodeScanner = null

// DOM Elements
const resultOverlay = document.getElementById('result-overlay')
const resultValue = document.getElementById('result-value')
const resumeBtn = document.getElementById('resume-btn')
const copyBtn = document.getElementById('copy-btn')
const historyList = document.getElementById('history-list')
const exportBtn = document.getElementById('export-btn')
const beepSound = document.getElementById('beep-sound')
const scannerOverlay = document.getElementById('scanner-overlay')

// Functions
function updateHistoryUI() {
  if (history.length === 0) {
    historyList.innerHTML = '<div class="empty-state"><p>No hay escaneos todavía</p></div>'
    return
  }

  historyList.innerHTML = history.map((item, index) => `
    <div class="history-item">
      <div class="item-info">
        <span class="item-value">${item.text}</span>
        <span class="item-time">${item.date}</span>
      </div>
      <div class="item-actions">
        <button class="btn-icon copy-item" data-text="${item.text}" title="Copiar">
          <i data-lucide="copy"></i>
        </button>
        <button class="btn-icon delete-item" data-index="${index}" title="Eliminar">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>
  `).join('')

  // Re-initialize icons for dynamic content
  createIcons({
    icons: { Copy, Trash2 }
  })

  // Add event listeners to history items
  document.querySelectorAll('.copy-item').forEach(btn => {
    btn.onclick = () => copyToClipboard(btn.dataset.text)
  })
  document.querySelectorAll('.delete-item').forEach(btn => {
    btn.onclick = () => deleteHistoryItem(btn.dataset.index)
  })
}

function addToHistory(text) {
  const now = new Date()
  const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  // Prevent duplicate consecutive scans
  if (history.length > 0 && history[0].text === text) return

  history.unshift({ text, date: dateStr })
  if (history.length > 50) history.pop() // Limit history

  localStorage.setItem('scanHistory', JSON.stringify(history))
  updateHistoryUI()
}

function deleteHistoryItem(index) {
  history.splice(index, 1)
  localStorage.setItem('scanHistory', JSON.stringify(history))
  updateHistoryUI()
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = copyBtn.innerHTML
    copyBtn.innerHTML = '<i data-lucide="check"></i> Copiado'
    createIcons()
    setTimeout(() => {
      copyBtn.innerHTML = originalText
      createIcons()
    }, 2000)
  })
}

function exportToCSV() {
  if (history.length === 0) return

  const csvRows = [
    ['Contenido', 'Fecha'],
    ...history.map(item => [item.text, item.date])
  ]

  const csvContent = csvRows.map(e => e.join(",")).join("\n")
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("download", `escaneos_${new Date().getTime()}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function onScanSuccess(decodedText, decodedResult) {
  // Beep sound
  beepSound.play()

  // Visual feedback
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#7c3aed', '#a78bfa', '#10b981']
  })

  // Stop scanner or pause
  // We'll just show the overlay
  resultValue.innerText = decodedText
  resultOverlay.classList.remove('hidden')
  scannerOverlay.classList.add('hidden')

  addToHistory(decodedText)

  console.log(`Scan result: ${decodedText}`, decodedResult)
}

function startScanner() {
  html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
      fps: 20,
      qrbox: { width: 250, height: 250 },
      aspectRatio: 1.0,
      rememberLastUsedCamera: true,
      supportedScanTypes: [0, 1] // QR and Barcode
    },
    /* verbose= */ false
  )

  html5QrcodeScanner.render(onScanSuccess, (error) => {
    // Silent failure to avoid spam
  })
}

// Initialization and Events
document.addEventListener('DOMContentLoaded', () => {
  updateHistoryUI()
  startScanner()
})

resumeBtn.onclick = () => {
  resultOverlay.classList.add('hidden')
  scannerOverlay.classList.remove('hidden')
}

copyBtn.onclick = () => copyToClipboard(resultValue.innerText)

exportBtn.onclick = exportToCSV
