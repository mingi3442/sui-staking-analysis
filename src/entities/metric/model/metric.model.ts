import { Metric } from "./metric.types";

export class MetricEntity implements Metric {
  title: string;
  value: string | number;
  changeRate: number | null;
  position: number | null;

  private constructor(data: Metric) {
    this.validateData(data);
    this.title = data.title;
    this.value = data.value;
    this.changeRate = data.changeRate;
    this.position = data.position;
  }

  // * 데이터 유효성 검증
  private validateData(data: Metric): void {
    if (!data.title) throw new Error("Title is required");
    if (data.value === undefined) throw new Error("Value is required");
  }

  // * 변화율이 있는지 확인
  hasChangeRate(): boolean {
    return this.changeRate !== null;
  }

  // * 위치 정보가 있는지 확인
  hasPosition(): boolean {
    return this.position !== null;
  }

  // * 변화율이 양수인지 확인
  isPositiveChange(): boolean {
    return this.changeRate !== null && this.changeRate > 0;
  }

  // * 숫자 값인지 확인
  hasNumericValue(): boolean {
    return typeof this.value === "number";
  }

  // * 정적 메서드: Metric 데이터로부터 MetricEntity 인스턴스 생성
  static create(data: Metric): MetricEntity {
    return new MetricEntity(data);
  }
}
