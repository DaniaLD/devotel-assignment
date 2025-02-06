
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model JobOffer
 * 
 */
export type JobOffer = $Result.DefaultSelection<Prisma.$JobOfferPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JobOffers
 * const jobOffers = await prisma.jobOffer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more JobOffers
   * const jobOffers = await prisma.jobOffer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.jobOffer`: Exposes CRUD operations for the **JobOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOffers
    * const jobOffers = await prisma.jobOffer.findMany()
    * ```
    */
  get jobOffer(): Prisma.JobOfferDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    JobOffer: 'JobOffer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "jobOffer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JobOffer: {
        payload: Prisma.$JobOfferPayload<ExtArgs>
        fields: Prisma.JobOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findFirst: {
            args: Prisma.JobOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findMany: {
            args: Prisma.JobOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          create: {
            args: Prisma.JobOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          createMany: {
            args: Prisma.JobOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          delete: {
            args: Prisma.JobOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          update: {
            args: Prisma.JobOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          deleteMany: {
            args: Prisma.JobOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          upsert: {
            args: Prisma.JobOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          aggregate: {
            args: Prisma.JobOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOffer>
          }
          groupBy: {
            args: Prisma.JobOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOfferCountArgs<ExtArgs>
            result: $Utils.Optional<JobOfferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jobOffer?: JobOfferOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model JobOffer
   */

  export type AggregateJobOffer = {
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  export type JobOfferAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobOfferSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobOfferMinAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    type: string | null
    salaryMin: number | null
    salaryMax: number | null
    company: string | null
    industry: string | null
    postedDate: Date | null
  }

  export type JobOfferMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    type: string | null
    salaryMin: number | null
    salaryMax: number | null
    company: string | null
    industry: string | null
    postedDate: Date | null
  }

  export type JobOfferCountAggregateOutputType = {
    id: number
    title: number
    location: number
    type: number
    salaryMin: number
    salaryMax: number
    company: number
    industry: number
    skills: number
    postedDate: number
    _all: number
  }


  export type JobOfferAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobOfferSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobOfferMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    type?: true
    salaryMin?: true
    salaryMax?: true
    company?: true
    industry?: true
    postedDate?: true
  }

  export type JobOfferMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    type?: true
    salaryMin?: true
    salaryMax?: true
    company?: true
    industry?: true
    postedDate?: true
  }

  export type JobOfferCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    type?: true
    salaryMin?: true
    salaryMax?: true
    company?: true
    industry?: true
    skills?: true
    postedDate?: true
    _all?: true
  }

  export type JobOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffer to aggregate.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOffers
    **/
    _count?: true | JobOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOfferMaxAggregateInputType
  }

  export type GetJobOfferAggregateType<T extends JobOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOffer[P]>
      : GetScalarType<T[P], AggregateJobOffer[P]>
  }




  export type JobOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithAggregationInput | JobOfferOrderByWithAggregationInput[]
    by: JobOfferScalarFieldEnum[] | JobOfferScalarFieldEnum
    having?: JobOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOfferCountAggregateInputType | true
    _avg?: JobOfferAvgAggregateInputType
    _sum?: JobOfferSumAggregateInputType
    _min?: JobOfferMinAggregateInputType
    _max?: JobOfferMaxAggregateInputType
  }

  export type JobOfferGroupByOutputType = {
    id: string
    title: string
    location: string
    type: string
    salaryMin: number
    salaryMax: number
    company: string
    industry: string
    skills: string[]
    postedDate: Date
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  type GetJobOfferGroupByPayload<T extends JobOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
            : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
        }
      >
    >


  export type JobOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    type?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    company?: boolean
    industry?: boolean
    skills?: boolean
    postedDate?: boolean
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    type?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    company?: boolean
    industry?: boolean
    skills?: boolean
    postedDate?: boolean
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    type?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    company?: boolean
    industry?: boolean
    skills?: boolean
    postedDate?: boolean
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    type?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    company?: boolean
    industry?: boolean
    skills?: boolean
    postedDate?: boolean
  }

  export type JobOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "type" | "salaryMin" | "salaryMax" | "company" | "industry" | "skills" | "postedDate", ExtArgs["result"]["jobOffer"]>

  export type $JobOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOffer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location: string
      type: string
      salaryMin: number
      salaryMax: number
      company: string
      industry: string
      skills: string[]
      postedDate: Date
    }, ExtArgs["result"]["jobOffer"]>
    composites: {}
  }

  type JobOfferGetPayload<S extends boolean | null | undefined | JobOfferDefaultArgs> = $Result.GetResult<Prisma.$JobOfferPayload, S>

  type JobOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOfferCountAggregateInputType | true
    }

  export interface JobOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOffer'], meta: { name: 'JobOffer' } }
    /**
     * Find zero or one JobOffer that matches the filter.
     * @param {JobOfferFindUniqueArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOfferFindUniqueArgs>(args: SelectSubset<T, JobOfferFindUniqueArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one JobOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOfferFindUniqueOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first JobOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOfferFindFirstArgs>(args?: SelectSubset<T, JobOfferFindFirstArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first JobOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more JobOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOffers
     * const jobOffers = await prisma.jobOffer.findMany()
     * 
     * // Get first 10 JobOffers
     * const jobOffers = await prisma.jobOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOfferFindManyArgs>(args?: SelectSubset<T, JobOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a JobOffer.
     * @param {JobOfferCreateArgs} args - Arguments to create a JobOffer.
     * @example
     * // Create one JobOffer
     * const JobOffer = await prisma.jobOffer.create({
     *   data: {
     *     // ... data to create a JobOffer
     *   }
     * })
     * 
     */
    create<T extends JobOfferCreateArgs>(args: SelectSubset<T, JobOfferCreateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many JobOffers.
     * @param {JobOfferCreateManyArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOfferCreateManyArgs>(args?: SelectSubset<T, JobOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOffers and returns the data saved in the database.
     * @param {JobOfferCreateManyAndReturnArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a JobOffer.
     * @param {JobOfferDeleteArgs} args - Arguments to delete one JobOffer.
     * @example
     * // Delete one JobOffer
     * const JobOffer = await prisma.jobOffer.delete({
     *   where: {
     *     // ... filter to delete one JobOffer
     *   }
     * })
     * 
     */
    delete<T extends JobOfferDeleteArgs>(args: SelectSubset<T, JobOfferDeleteArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one JobOffer.
     * @param {JobOfferUpdateArgs} args - Arguments to update one JobOffer.
     * @example
     * // Update one JobOffer
     * const jobOffer = await prisma.jobOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOfferUpdateArgs>(args: SelectSubset<T, JobOfferUpdateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more JobOffers.
     * @param {JobOfferDeleteManyArgs} args - Arguments to filter JobOffers to delete.
     * @example
     * // Delete a few JobOffers
     * const { count } = await prisma.jobOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOfferDeleteManyArgs>(args?: SelectSubset<T, JobOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOfferUpdateManyArgs>(args: SelectSubset<T, JobOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers and returns the data updated in the database.
     * @param {JobOfferUpdateManyAndReturnArgs} args - Arguments to update many JobOffers.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one JobOffer.
     * @param {JobOfferUpsertArgs} args - Arguments to update or create a JobOffer.
     * @example
     * // Update or create a JobOffer
     * const jobOffer = await prisma.jobOffer.upsert({
     *   create: {
     *     // ... data to create a JobOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOffer we want to update
     *   }
     * })
     */
    upsert<T extends JobOfferUpsertArgs>(args: SelectSubset<T, JobOfferUpsertArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferCountArgs} args - Arguments to filter JobOffers to count.
     * @example
     * // Count the number of JobOffers
     * const count = await prisma.jobOffer.count({
     *   where: {
     *     // ... the filter for the JobOffers we want to count
     *   }
     * })
    **/
    count<T extends JobOfferCountArgs>(
      args?: Subset<T, JobOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobOfferAggregateArgs>(args: Subset<T, JobOfferAggregateArgs>): Prisma.PrismaPromise<GetJobOfferAggregateType<T>>

    /**
     * Group by JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOfferGroupByArgs['orderBy'] }
        : { orderBy?: JobOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOffer model
   */
  readonly fields: JobOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobOffer model
   */ 
  interface JobOfferFieldRefs {
    readonly id: FieldRef<"JobOffer", 'String'>
    readonly title: FieldRef<"JobOffer", 'String'>
    readonly location: FieldRef<"JobOffer", 'String'>
    readonly type: FieldRef<"JobOffer", 'String'>
    readonly salaryMin: FieldRef<"JobOffer", 'Int'>
    readonly salaryMax: FieldRef<"JobOffer", 'Int'>
    readonly company: FieldRef<"JobOffer", 'String'>
    readonly industry: FieldRef<"JobOffer", 'String'>
    readonly skills: FieldRef<"JobOffer", 'String[]'>
    readonly postedDate: FieldRef<"JobOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOffer findUnique
   */
  export type JobOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findUniqueOrThrow
   */
  export type JobOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findFirst
   */
  export type JobOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findFirstOrThrow
   */
  export type JobOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findMany
   */
  export type JobOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter, which JobOffers to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer create
   */
  export type JobOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data needed to create a JobOffer.
     */
    data: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
  }

  /**
   * JobOffer createMany
   */
  export type JobOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobOffer createManyAndReturn
   */
  export type JobOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobOffer update
   */
  export type JobOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data needed to update a JobOffer.
     */
    data: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
    /**
     * Choose, which JobOffer to update.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer updateMany
   */
  export type JobOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
  }

  /**
   * JobOffer updateManyAndReturn
   */
  export type JobOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
  }

  /**
   * JobOffer upsert
   */
  export type JobOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The filter to search for the JobOffer to update in case it exists.
     */
    where: JobOfferWhereUniqueInput
    /**
     * In case the JobOffer found by the `where` argument doesn't exist, create a new JobOffer with this data.
     */
    create: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
    /**
     * In case the JobOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
  }

  /**
   * JobOffer delete
   */
  export type JobOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Filter which JobOffer to delete.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer deleteMany
   */
  export type JobOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffers to delete
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to delete.
     */
    limit?: number
  }

  /**
   * JobOffer without action
   */
  export type JobOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobOfferScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    type: 'type',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    company: 'company',
    industry: 'industry',
    skills: 'skills',
    postedDate: 'postedDate'
  };

  export type JobOfferScalarFieldEnum = (typeof JobOfferScalarFieldEnum)[keyof typeof JobOfferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobOfferWhereInput = {
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    id?: StringFilter<"JobOffer"> | string
    title?: StringFilter<"JobOffer"> | string
    location?: StringFilter<"JobOffer"> | string
    type?: StringFilter<"JobOffer"> | string
    salaryMin?: IntFilter<"JobOffer"> | number
    salaryMax?: IntFilter<"JobOffer"> | number
    company?: StringFilter<"JobOffer"> | string
    industry?: StringFilter<"JobOffer"> | string
    skills?: StringNullableListFilter<"JobOffer">
    postedDate?: DateTimeFilter<"JobOffer"> | Date | string
  }

  export type JobOfferOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    type?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    skills?: SortOrder
    postedDate?: SortOrder
  }

  export type JobOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_company?: JobOfferTitleCompanyCompoundUniqueInput
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    title?: StringFilter<"JobOffer"> | string
    location?: StringFilter<"JobOffer"> | string
    type?: StringFilter<"JobOffer"> | string
    salaryMin?: IntFilter<"JobOffer"> | number
    salaryMax?: IntFilter<"JobOffer"> | number
    company?: StringFilter<"JobOffer"> | string
    industry?: StringFilter<"JobOffer"> | string
    skills?: StringNullableListFilter<"JobOffer">
    postedDate?: DateTimeFilter<"JobOffer"> | Date | string
  }, "id" | "title_company">

  export type JobOfferOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    type?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    skills?: SortOrder
    postedDate?: SortOrder
    _count?: JobOfferCountOrderByAggregateInput
    _avg?: JobOfferAvgOrderByAggregateInput
    _max?: JobOfferMaxOrderByAggregateInput
    _min?: JobOfferMinOrderByAggregateInput
    _sum?: JobOfferSumOrderByAggregateInput
  }

  export type JobOfferScalarWhereWithAggregatesInput = {
    AND?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    OR?: JobOfferScalarWhereWithAggregatesInput[]
    NOT?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobOffer"> | string
    title?: StringWithAggregatesFilter<"JobOffer"> | string
    location?: StringWithAggregatesFilter<"JobOffer"> | string
    type?: StringWithAggregatesFilter<"JobOffer"> | string
    salaryMin?: IntWithAggregatesFilter<"JobOffer"> | number
    salaryMax?: IntWithAggregatesFilter<"JobOffer"> | number
    company?: StringWithAggregatesFilter<"JobOffer"> | string
    industry?: StringWithAggregatesFilter<"JobOffer"> | string
    skills?: StringNullableListFilter<"JobOffer">
    postedDate?: DateTimeWithAggregatesFilter<"JobOffer"> | Date | string
  }

  export type JobOfferCreateInput = {
    id?: string
    title: string
    location: string
    type: string
    salaryMin: number
    salaryMax: number
    company: string
    industry: string
    skills?: JobOfferCreateskillsInput | string[]
    postedDate: Date | string
  }

  export type JobOfferUncheckedCreateInput = {
    id?: string
    title: string
    location: string
    type: string
    salaryMin: number
    salaryMax: number
    company: string
    industry: string
    skills?: JobOfferCreateskillsInput | string[]
    postedDate: Date | string
  }

  export type JobOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    skills?: JobOfferUpdateskillsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    skills?: JobOfferUpdateskillsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferCreateManyInput = {
    id?: string
    title: string
    location: string
    type: string
    salaryMin: number
    salaryMax: number
    company: string
    industry: string
    skills?: JobOfferCreateskillsInput | string[]
    postedDate: Date | string
  }

  export type JobOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    skills?: JobOfferUpdateskillsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    skills?: JobOfferUpdateskillsInput | string[]
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobOfferTitleCompanyCompoundUniqueInput = {
    title: string
    company: string
  }

  export type JobOfferCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    type?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    skills?: SortOrder
    postedDate?: SortOrder
  }

  export type JobOfferAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    type?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    postedDate?: SortOrder
  }

  export type JobOfferMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    type?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    postedDate?: SortOrder
  }

  export type JobOfferSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type JobOfferCreateskillsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobOfferUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}