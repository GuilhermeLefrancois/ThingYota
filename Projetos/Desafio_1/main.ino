void setup()
{
    // array para o display de 7 seg
    bool bcd[7];
}

void loop()
{
    // set das porats
    pinMode(1,OUTPUT);
    pinMode(2,OUTPUT);
    pinMode(3,OUTPUT);
    pinMode(4,OUTPUT);
    pinMode(5,OUTPUT);
    pinMode(6,OUTPUT);
    pinMode(7,OUTPUT);
    pinMode(8,OUTPUT);
}

bool set_0(bool bcd[]) {
    for (int i = 0; i <= 6; i++)
    {
        bcd[i] = true;
    }
    bcd[7] = false;
    return bcd;
}