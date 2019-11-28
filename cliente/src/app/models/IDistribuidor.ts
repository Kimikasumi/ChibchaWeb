export interface IDistribuidor{
    cedula?: number;
    nombre?: string;
    correo?: string;
    contrasenia?: string;
    cod_t_distribuidor?: number;
}
export interface IDistribuidorAdmin{
  cedula?: number;
  nombre?: string;
  correo?: string;
  nom_t_distribuidor?: string;
}
export interface IDistribuidorInfo{
    cedula?:number;
    nombre?:string;
    cod_dominio?: number;
    nom_dominio?:string;
    nom_p_pago?:string;

}
