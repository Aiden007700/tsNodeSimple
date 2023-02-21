declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DB_TYPE: "postgres";
        DB_PORT: number | undefined;
      }
    }
  }
  
  export {}