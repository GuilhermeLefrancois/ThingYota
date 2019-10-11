#include <Arduino.h>

const int LDR = A0;
const int LED = 2;
const int BTN = 3;

void setup() {
  Serial.begin(9600);
  pinMode(LDR,INPUT); // setando KDR como dis. de entrada
  pinMode(BTN,INPUT); // setando PBTN como dis. de entrada
  pinMode(LED,OUTPUT); // serando o LED como disp. de saida
}

void loop() {

  int LdrStatus = analogRead(LDR); // coleta do valor do status de luminosidade capturadi
  int btnStatus = digitalRead(BTN); // status do botao

  Serial.print("Lumos :\t");
  Serial.println(LdrStatus);
  Serial.print("Btn :\t");
  Serial.println(btnStatus);
  
  if (btnStatus) {
      // o enforce ocorre apenas com o pressionar do botao
      enforceLed();
    } else {
      // if (LdrStatus <= 5 && !btnStatus) { // caso a lumonosidade seja abaixo de 700
    if (LdrStatus <= 5) { // caso a lumonosidade seja abaixo de 700
      digitalWrite(LED,true); // 
    // } else if (LdrStatus > 5 && !btnStatus) {
    } else {
      digitalWrite(LED,false); // caso a luminosidade seja acima de 700
    }
  }
   
}

void enforceLed() {
  bool ledState = digitalRead(LED); // status do led
  digitalWrite(LED,!ledState); // sinal do led invertido
  delay(5000);
  digitalWrite(LED,!ledState); // sinal revertido
}
