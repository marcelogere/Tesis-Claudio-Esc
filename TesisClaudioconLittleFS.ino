#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSocketsServer.h>
#include <Hash.h>
#include <ESPAsyncTCP.h>
#include <LittleFS.h>
#include <Wire.h>

const char *ssid_AP = "ESP8266_AP";
const char *password_AP = "TCAGM_290372";

// Web Server HTTP Authentication credentials
const char* http_username = "admin";
const char* http_password = "admin";

String value = "";
String conexion = "";


AsyncWebServer server(80);

WebSocketsServer webSocket = WebSocketsServer(81);
//Puerto de conex. del WebSocket nº81

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  /*Declara la función webSocketEvent para gestionar
    los 'eventos' relativos a la conexión WebSocket*/
  switch (type) {
    //SI EL 'EVENTO' ES...
    case WStype_CONNECTED: {
        //...UNA NUEVA CONEXIÓN WEBSOCKET CON UN CLIENTE:
        IPAddress ip = webSocket.remoteIP(num);
        /*Asigna a la variable ip la dirección IP
          de la conexión y el nº de conexión del WS*/
        Serial.printf("[%u] Conectado a través de la URL: %d.%d.%d.%d - %s\n", num,
                      ip[0], ip[1], ip[2], ip[3], payload);
        //Envía al Mon. Serie el nº de conex. y direcc. IP
      }
      break;
    //Finaliza el evento
    case WStype_DISCONNECTED:
      //...EL CESE DE UNA CONEXIÓN WEBSOCKET:
      Serial.printf("[%u] Desconectado!\n", num);
      //Envía al Mon.Serie el msg. con nº WS desconectado
      break;
    //Finaliza el evento
    case WStype_TEXT:
      //...UN MENSAJE DE TEXTO RECIBIDO POR LA CONEX. WS:
      Serial.printf("Número de conexión: %u - Carácteres recibidos: %s\n ", num,
                    payload);
      //Envía al Mon. Serie el msg. con nº WS de origen
      break;
    //Finaliza el evento
    case WStype_ERROR:
      //...UN ERROR EN LA CONEXIÓN WEBSOCKET
      Serial.printf("Se ha recibido un error. \n");
      //Envía al Monitor Serie el mensaje de error
      break;
      //Finaliza el evento
  }
}

void setup() {
  Serial.begin(115200);
  delay(10);
  Serial.println();

  WiFi.softAP(ssid_AP, password_AP, 1); //Inicializa la conexión WiFi - Access Point- (AP)
  IPAddress myIP = WiFi.softAPIP(); //Asigna a la variable myIP la dirección IP del AP
  Serial.print("IP del access point: "); //Envía al Monitor Serie el texto
  Serial.println(myIP); //Envía al Monitor Serie el la dirección IP del AP
  webSocket.begin(); //Inicializa la conexión WebSocket
  webSocket.onEvent(webSocketEvent); /*Cuando se recibe un 'evento' relativo al WS se ejecuta la función webSocketEvent para su gestión*/

  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid_AP, password_AP);

  Serial.println("WiFi conectada.");
  Serial.println();
  WiFi.printDiag(Serial);
  Serial.println();
  Serial.print("AP dirección IP: ");
  Serial.println(WiFi.softAPIP());

  if (!LittleFS.begin ()) {
    Serial.println ("An Error has occurred while mounting LittleFS");
    return;
  }

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/index.html", String(), false);
  });

  // Route for mainmenu web page
  server.on("/pages/mainmenu.html", HTTP_GET, [](AsyncWebServerRequest * request) {
    if (!request->authenticate(http_username, http_password))
      return request->requestAuthentication();
    request->send(LittleFS, "/pages/mainmenu.html", String(), false);
    //request->send(200, String(), ssid_AP);
  });

  // Route for settings web page
  server.on("/pages/settings.html", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/pages/settings.html", String(), false);
  });

  server.on("/logout", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(401);
  });

  // Route to load style.css file
  server.on("/styles/style.css", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/styles/style.css", "text/css");
  });

  // Route to load flexboxgrid.css file
  server.on("/styles/flexboxgrid.css", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/styles/flexboxgrid.css", "text/css");
  });

  // Route to load stylefonts.css file
  server.on("/styles/stylefonts.css", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/styles/stylefonts.css", "text/css");
  });

  // Route for fonts
  server.on("/fonts", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/fonts/icomoon.ttf");
  });

  // Route to load alarm.wav file
  server.on("/media/alarm.wav", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/media/alarm.wav");
  });

  // Route to load app.js file
  server.on("/apps/app.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/app.js", "text/javascript");
  });

  // Route to load SectionBoxes.js file
  server.on("/apps/SectionBoxes.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/SectionBoxes.js", "text/javascript");
  });

  // Route to load OptionsGauges.js file
  server.on("/apps/OptionsGauges.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/OptionsGauges.js", "text/javascript");
  });

  // Route to load gauge.min.js file
  server.on("/apps/gauge.min.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/gauge.min.js", "text/javascript");
  });

  // Route to load session_out.js file
  server.on("/apps/session_out.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/session_out.js", "text/javascript");
  });

  // Route to load papaparse.min.js file
  server.on("/apps/papaparse.min.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/papaparse.min.js", "text/javascript");
  });

  // Route to load howler.min.js file
  server.on("/apps/howler.min.js", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send(LittleFS, "/apps/howler.min.js", "text/javascript");
  });

  server.begin();
  Serial.println("Servidor inicializado.");
}

void loop() {

  //Declara la func. LOOP - Funciones del sketch que se repiten indefinidamente
  webSocket.loop(); //El servidor 'escucha' los 'eventos' de la conexión WebSocket
  //server.handleClient(); /*El servidor 'escucha' las peticiones entrantes de los clientes. Conforme a lo programado solo puede responder a la petición de la página WEB almacenada*/

  if (Serial.available() != 0) {
    value = Serial.readStringUntil('*');
    webSocket.broadcastTXT(value);
    Serial.print("I received: ");
    Serial.println(value);
    delay(1000);
  }
}
