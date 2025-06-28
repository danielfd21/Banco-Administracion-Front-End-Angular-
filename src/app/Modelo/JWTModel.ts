export interface JwtModel{

    sub:string;
    exp:number;
    iat?:number;
    departamento?:string;
}