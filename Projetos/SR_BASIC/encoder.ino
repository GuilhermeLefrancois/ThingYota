#define ENC_A 2
#define ENC_B 3
#define ENC_PORT PINB

void setup()
{

pinMode(ENC_A, INPUT);
digitalWrite(ENC_A, HIGH);
pinMode(ENC_B, INPUT);
digitalWrite(ENC_B, HIGH);
Serial.println("Start");

}

void loop()
{
static uint8_t counter = 0; //this variable will be changed by encoder input
int8_t tmpdata;
/**/
tmpdata = read_encoder();
if( tmpdata ) {
Serial.print("Counter value: ");
Serial.println(counter, DEC);

counter += tmpdata;

}

}

/* O encoder pode assumir 3 estados =1,0,1 */
int8_t read_encoder()
{
// contagem do estado a cada ciclo assumido pelo encoder
static int8_t enc_states[] = {0,-1,1,0,1,0,0,-1,-1,0,0,1,0,1,-1,0};
static uint8_t old_AB = 0;
/**/
old_AB = old_AB 2; // estaaod anterior
old_AB |= ( ENC_PORT & 0x03 ); //estado atual
return ( enc_states[( old_AB & 0x0f )]);
}