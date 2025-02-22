import { Chart } from "./chart.types";

export class ChartEntity implements Chart {
  price: number;
  staked: number;
  reward: number;
  inflation: number;
  date: number;

  private constructor(data: Chart) {
    this.validateData(data);
    this.price = data.price;
    this.staked = data.staked;
    this.reward = data.reward;
    this.inflation = data.inflation;
    this.date = data.date;
  }

  // * 데이터 유효성 검증
  private validateData(data: Chart): void {
    if (data.price < 0) throw new Error("Price cannot be negative");
    if (data.staked < 0) throw new Error("Staked amount cannot be negative");
    if (data.reward < 0) throw new Error("Reward cannot be negative");
    if (data.date < 0) throw new Error("Invalid date timestamp");
  }

  // * 날짜를 Date 객체로 변환
  getDate(): Date {
    return new Date(this.date);
  }

  // * Static Method: Chart 데이터로부터 ChartEntity 인스턴스 생성을 위한 팩토리 패턴 매소드
  static create(data: Chart): ChartEntity {
    return new ChartEntity(data);
  }
}
