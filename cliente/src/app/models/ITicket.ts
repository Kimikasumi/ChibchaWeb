export interface ITicketC {
  cod_dominio?: number;
  nom_dominio?: string;
  cod_ticket?: number;
  nombre?: string;

  DomDescrip?: string;
  descripcion?: string;

  cod_estado?: string;
  nom_estado?: string;
}

export interface ITicketS {
  cod_dominio?: number;
  nom_dominio?: string;
  nom_cliete?: string;
  descripcion?: string;
  nom_estado?: string;
  cod_ticket?: number;
}
