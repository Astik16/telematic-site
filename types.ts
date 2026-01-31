import React from 'react';

export enum VehicleType {
  PASSENGER = 'Легковой транспорт',
  CARGO = 'Грузовой транспорт',
  SPECIAL = 'Спецтехника',
  MUNICIPAL = 'Коммунальный транспорт'
}

export interface CalculatorState {
  vehicleType: VehicleType;
  count: number;
  fuelControl: boolean;
  region: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}