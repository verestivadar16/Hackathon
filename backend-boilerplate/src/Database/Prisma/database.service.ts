/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Injectable service class for managing database connections and shutdown hooks.
 *
 * @class
 * @extends PrismaClient
 * @implements OnModuleInit
 */
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  /**
   * Initializes the database connection when the module is initialized.
   *
   * @async
   * @method
   * @memberof DatabaseService
   * @implements OnModuleInit
   */
  public async onModuleInit(): Promise<void> {
    await this.$connect();
    console.log("Database connected");
  }

  /**
   * Enables shutdown hooks to close the application gracefully.
   *
   * @async
   * @method
   * @memberof DatabaseService
   * @param {INestApplication} app - The NestJS application instance.
   * @returns {Promise<void>}
   */
  public async enableShutdownHooks(app: INestApplication): Promise<void> {
    /**
     * Listens for the 'beforeExit' event to close the application when the process is about to exit.
     */
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
