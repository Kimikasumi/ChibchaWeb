export interface IRegistrador {
    cod_registrador?: number;
    nombre?: string;
    correo?: string;
    contrasenia?: string;
    cod_pais?: number;
}

export interface IRegistradorAdmin {
  cod_registrador?: number;
  nombre?: string;
  correo?: string;
  nom_pais?: string;
}
