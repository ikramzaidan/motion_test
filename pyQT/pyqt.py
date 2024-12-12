import sys
from PyQt5.QtWidgets import (
    QApplication, QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout, QHBoxLayout, QMessageBox
)

class DiscriminantCalculator(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.label_a = QLabel("Masukkan a:")
        self.input_a = QLineEdit()
        
        self.label_b = QLabel("Masukkan b:")
        self.input_b = QLineEdit()
        
        self.label_c = QLabel("Masukkan c:")
        self.input_c = QLineEdit()

        self.button_calculate = QPushButton("Hitung")
        self.button_calculate.clicked.connect(self.calculate_discriminant)

        # Label untuk menampilkan hasil
        self.result_label = QLabel("Hasil: -")

        # Layout setup
        layout = QVBoxLayout()

        # Layout untuk input
        input_layout_a = QHBoxLayout()
        input_layout_a.addWidget(self.label_a)
        input_layout_a.addWidget(self.input_a)
        layout.addLayout(input_layout_a)

        input_layout_b = QHBoxLayout()
        input_layout_b.addWidget(self.label_b)
        input_layout_b.addWidget(self.input_b)
        layout.addLayout(input_layout_b)

        input_layout_c = QHBoxLayout()
        input_layout_c.addWidget(self.label_c)
        input_layout_c.addWidget(self.input_c)
        layout.addLayout(input_layout_c)

        # Label untuk tombol dan hasil
        layout.addWidget(self.button_calculate)
        layout.addWidget(self.result_label)

        self.setLayout(layout)
        self.setWindowTitle("Penghitung Diskriminan")

    # Function perhitungan
    def calculate_discriminant(self):
        try:
            # Mengambil nilai input
            a = float(self.input_a.text())
            b = float(self.input_b.text())
            c = float(self.input_c.text())

            # Calculate discriminant
            discriminant = b**2 - 4*a*c

            # Menampilkan hasil
            self.result_label.setText(f"Hasil: {discriminant}")
        except ValueError:
            # Menampilkan pesan error
            QMessageBox.warning(self, "Input Error", "Harap masukkan angka yang valid untuk a, b, dan c.")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    calculator = DiscriminantCalculator()
    calculator.show()
    sys.exit(app.exec_())
