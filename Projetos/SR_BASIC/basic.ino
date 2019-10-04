#define LED_1 3
#define SR_1 2
void setup()
{
  // led
  pinMode(LED_1, OUTPUT);
  // sendor 
  pinMode(SR_1,INPUT);
  // frquencia da comunicação serial
  Serial.begin(9600);
}
// estado do sendor
bool estadpSR__1() {
  return digitalRead(SR_1);
}
void loop()
{
  // leitura
  if (estadpSR__1() == true) {
  	digitalWrite(LED_1, HIGH);
  	delay(1000); // Wait for 1000 millisecond(s)
  } else {
    digitalWrite(LED_1, LOW);
  	delay(1000); // Wait for 1000 millisecond(s)
  }
}