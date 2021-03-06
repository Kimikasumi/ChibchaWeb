export interface ITicketC {
  cod_dominio?: number;
  nom_dominio?: string;
  cod_ticket?: number;
  nombre?: string;

  respuesta?: string;

  DomDescrip?: string;
  descripcion?: string;

  cod_estado?: string;
  nom_estado?: string;
}

export interface ITicketS{
    cod_dominio?:number;
    cod_t_ticket?:number;
    nom_dominio?:string;
    nombre?:string;
    descripcion?:string;
    nom_estado?:string;
    cedula?:number;
}

export interface ITicketE {
  cedula?: number;
  cod_p_pago?: number;
  cod_paquete?: number;
  resp?: string;
}
