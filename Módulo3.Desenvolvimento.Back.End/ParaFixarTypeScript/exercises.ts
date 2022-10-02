export function losango(diagonal_maior: number, diagonal_menor: number): number {
  return (diagonal_maior * diagonal_menor) / 2;
}
export function trapezio(base_maior :number, base_menor:number, altura:number):number{
  return((base_maior + base_menor)*altura)/2;
}

export function circulo( PI:number = 3.14, raio: number) : number {
return (PI * (raio*raio))
}