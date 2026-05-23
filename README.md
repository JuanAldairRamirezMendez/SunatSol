# SUNAT SOL

Aplicación móvil para trabajadores independientes que necesitan emitir Recibos por Honorarios Electrónicos con un flujo guiado y simple.

## Stack

- React Native con Expo y TypeScript
- NativeWind para estilos utilitarios
- React Navigation para el flujo lineal en stack
- React Native Reanimated para animaciones fluidas
- PostgreSQL con RLS vía Supabase o compatible

## Estructura

- [App.tsx](App.tsx) contiene el stack principal.
- [src/components](src/components) concentra los componentes de diseño.
- [src/screens](src/screens) contiene el flujo Login -> Home -> Emisión -> Resumen -> Éxito.
- [db/schema.sql](db/schema.sql) define la base de datos y las políticas RLS.

## Notas

Este scaffold deja preparada la base visual y funcional. Después de instalar dependencias con Expo, la app puede ejecutarse como proyecto móvil.

## Backend

- Configura `DATABASE_URL` en un archivo `.env` basado en [.env.example](.env.example).
- El backend mínimo vive en [server/index.js](server/index.js) y usa PostgreSQL vía `pg`.
- La ruta `GET /health` verifica conectividad y `GET /clients/:ruc` consulta el nombre del cliente desde la base.
