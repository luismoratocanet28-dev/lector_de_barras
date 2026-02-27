import cv2
from pyzbar.pyzbar import decode, ZBarSymbol

def main():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("No se pudo abrir la cámara")
        return

    print("Apunta al código. En cuanto lea 1, imprimirá y cerrará.")

    # Tipos de códigos permitidos (evita PDF417 y warnings)
    symbols = [
        ZBarSymbol.EAN13,
        ZBarSymbol.EAN8,
        ZBarSymbol.CODE128,
        ZBarSymbol.CODE39,
        ZBarSymbol.QRCODE
    ]

    while True:
        ok, frame = cap.read()
        if not ok:
            continue

        # Convertir a gris (más estable)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        decoded = decode(gray, symbols=symbols)

        for obj in decoded:
            text = obj.data.decode("utf-8", errors="replace")
            print("CÓDIGO LEÍDO:", text)

            x, y, w, h = obj.rect
            cv2.rectangle(gray, (x, y), (x + w, y + h), (255, 255, 255), 2)

            cap.release()
            cv2.destroyAllWindows()
            return

        cv2.imshow("Lector de códigos", gray)

        if cv2.waitKey(1) == 27:  # ESC
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
