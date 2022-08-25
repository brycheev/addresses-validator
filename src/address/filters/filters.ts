import { SelectQueryBuilder } from 'typeorm';
import { AddressEntity } from '../entites/address.entity';

export function filterByIndex(
  query: SelectQueryBuilder<AddressEntity>,
  { index },
) {
  if (!index) return query;
  query.andWhere('LOWER(address.index) LIKE :index', {
    index: `%${index.toLowerCase()}%`,
  });
  return query;
}

export function filterByLocality(
  query: SelectQueryBuilder<AddressEntity>,
  { locality },
) {
  if (!locality) return query;
  query.andWhere('LOWER(address.locality) LIKE :locality', {
    locality: `%${locality.toLowerCase()}%`,
  });
  return query;
}

export function filterByCountry(
  query: SelectQueryBuilder<AddressEntity>,
  { country },
) {
  if (!country) return query;
  query.andWhere('LOWER(address.country) LIKE :country', {
    country: `%${country.toLowerCase()}%`,
  });
  return query;
}
