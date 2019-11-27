export interface IDistribuidor{
    cedula?: number;
    nombre?: string;
    correo?: Date;
    contrasenia?: Date;
    cod_t_distribuidor?: number;
}

export interface IDistribuidorInfo{
    cedula?:number;
    nombre?:string;
    cod_dominio?: number;
    nom_dominio?:string;
    nom_p_pago?:string;

}