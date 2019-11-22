package com.example.iot2;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.*;

/**
 *
 * @author Roverson
 */
public class TesteCliente {
    protected String mat;
    protected String key;

    public TesteCliente (String m, String k){
        this.mat = m;
        this.key = k;
    }

    public String getMat() {
        return mat;
    }

    public void setMat(String mat) {
        this.mat = mat;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public static void efetuarLogin(String mat, String key) throws Exception{
        String frase;
        String fraseModificada;

        TesteCliente c = new TesteCliente (mat,key);

        Socket socketCliente = new Socket("localhost", 6789);

        DataOutputStream paraServidor = new DataOutputStream(socketCliente.getOutputStream());

        BufferedReader doServidor = new BufferedReader(new
                InputStreamReader(socketCliente.getInputStream()));

        paraServidor.writeUTF(c.getMat()+"/"+c.getKey());
        //resposta do servidor
        fraseModificada = doServidor.readLine();

        System.out.println(fraseModificada);
        socketCliente.close();


    }
}
