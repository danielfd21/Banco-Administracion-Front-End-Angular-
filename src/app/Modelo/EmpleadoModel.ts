export interface Empleado{

    cedula: string,
    nombre: string,
    apellidos: string,
    correo: string,
    fechaDeNacimiento: Date,
    idDepartamento: Departamento        

}


export interface Departamento{
    idDepartamento: number,
    nombre: string,
    cedula: JefeDepartamento
}

export interface JefeDepartamento{

    cedula: string,
    nombres: string,
    apellidos: string,
    correo: string,
    fechaDeNacimiento: Date


}