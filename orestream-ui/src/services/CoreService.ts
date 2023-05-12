import CoreGateway from '@/gateways/CoreGateway';
import type { WeatherForecastItem } from '@/models/WeatherForecastItem';

export default {
  get() {
    return CoreGateway.get<WeatherForecastItem[]>(`/WeatherForecast`);
  }
};