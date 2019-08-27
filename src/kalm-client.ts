/*
* Module to deal with available Dashboards Public API endpoints
*/
import { ALClient } from '@al/client';
import { StorageDescriptor } from './types';

class KalmClient {
  private alClient = ALClient;
  private serviceName = 'kalm';
  private version = 'v1';

  /*
  *
  */
  async listCatalogTables() {
    const items = await this.alClient.fetch({
      service_name: this.serviceName,
      version: this.version,
      path: '/catalog/table',
    });
    return items as StorageDescriptor[];
  }

  /*
  *
  */
  async getCatalogTable(table: string) {
    const item = await this.alClient.fetch({
      service_name: this.serviceName,
      version: this.version,
      path: `/catalog/table/${table}`,
    });
    return item as StorageDescriptor;
  }

  /*
   *
   */
  async startSimpleQuery(accountId: string, namedQuery: string) {
    const items = await this.alClient.fetch({
      service_name: this.serviceName,
      version: this.version,
      account_id: accountId,
      path: `/query/${namedQuery}`,
    });
    return items as any;
  }
}

export const kalmClient =  new KalmClient();
