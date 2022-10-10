class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r:string,c:string[]
    ){
    this.brand = b;
    this.size = s;
    this.resolution = r;

  }
  turnOn(){
    console.log(`A TV ${this.brand} tem o tamanho ${this.size} resolução ${this.resolution}
    suporta ${this.connections} conexões`);
    
  }
  
}
const tv1 = new TV('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();;