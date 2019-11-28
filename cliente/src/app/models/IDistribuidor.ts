export interface IDistribuidor{
    cedula?: number;
    nombre?: string;
    correo?: string;
    contrasenia?: string;
    cod_t_distribuidor?: number;
    nom_t_distribuidor?:string;
    val_comision?:number;
}

export interface IDistribuidorInfo{
    cedula?:number;
    nombre?:string;
    cod_dominio?: number;
    nom_dominio?:string;
    nom_p_pago?:string;

}

export interface IPQR{
    descripcion?: string;
    respuesta?: string;
    nom_t_ticket?: string;
    nom_estado?:string;
}