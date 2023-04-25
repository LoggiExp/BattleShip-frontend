//body chiamate post
export interface PlayerFront {
  name: string;
  team: number;
}

export interface ShipsFront {
  playerId: number;
  shipsPosition: ShipsPosition;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface ShipsPosition {
  ship_5_1: Coordinates[]; // Size 5
  ship_4_1: Coordinates[]; // Size 4
  ship_3_1: Coordinates[]; // Size 3
  ship_3_2: Coordinates[]; // Size 3
  ship_2_1: Coordinates[]; // Size 2
  ship_2_2: Coordinates[]; // Size 2
  ship_2_3: Coordinates[]; // Size 2   // Example: [1,4] [5,6]
  ship_1_1: Coordinates[]; // Size 1
  ship_1_2: Coordinates[]; // Size 1
}

export interface Shot {
  id: number;
  xAxis: number;
  yAxis: number;
}

//response chiamate get

export interface CellApi {
  id: string;
  gridId: number;
  xaxis: number;
  yaxis: number;
  state: number;
  shipId?: string;
}

export interface GridApi {
  id: number;
  cells: CellApi[][];
}

export interface PlayerApi {
  id: string;
  name: string;
  userGridId: number;
  shotGridId: number;
  team: number;
  points: number;
}

export interface ShipsApi {
  id: number;
  playerId: number;
  length: number;
  hp: number;
}

//da sistemare

export interface Ship {
  name: string;
  playerId?: number;
  length: number;
  hp: number;
}

export interface Player {
  // id: string;
  name: string;
  // userGridId: number;
  // shotGridId: number;
  team: number;
  // points: number;
}

export interface PlayerShipsData {
  playerId: number;
  ships: Coordinates[][];
}

export interface PlayerAPI {
  id: string;
  name: string;
  userGridId: number;
  shotGridId: number;
  team: number;
  points: number;
}
