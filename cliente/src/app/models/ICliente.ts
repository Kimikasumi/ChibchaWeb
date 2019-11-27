export interface ICliente{

    cedula?: number;
    numero?: string;
    plan_pago?: string;
    paquete?: string;
    correo?: string;
    contrasenia?:string;
    nombre?: string;
    fecha_vencimiento?: Date;
    nom_t_tarjeta?: string;
    cod_seguridad?: number;
    
}


export interface IPQR{
    descripcion?: string;
    respuesta?: string;
    nom_t_ticket?: string;
}
