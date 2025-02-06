/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model JobOffer
 *
 */
export type JobOffer = $Result.DefaultSelection<Prisma.$JobOfferPayload>;
/**
 * Model Company
 *
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>;
/**
 * Model Skill
 *
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>;
/**
 * Model JobSkill
 *
 */
export type JobSkill = $Result.DefaultSelection<Prisma.$JobSkillPayload>;

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
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb,
      {
        extArgs: ExtArgs;
      }
    >,
    ClientOptions
  >;

  /**
   * `prisma.jobOffer`: Exposes CRUD operations for the **JobOffer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobOffers
   * const jobOffers = await prisma.jobOffer.findMany()
   * ```
   */
  get jobOffer(): Prisma.JobOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Skills
   * const skills = await prisma.skill.findMany()
   * ```
   */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSkill`: Exposes CRUD operations for the **JobSkill** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobSkills
   * const jobSkills = await prisma.jobSkill.findMany()
   * ```
   */
  get jobSkill(): Prisma.JobSkillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;
  /**
   * Validator
   */
  export import validator = runtime.Public.validator;
  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;
  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;
  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    JobOffer: 'JobOffer';
    Company: 'Company';
    Skill: 'Skill';
    JobSkill: 'JobSkill';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps: 'jobOffer' | 'company' | 'skill' | 'jobSkill';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      JobOffer: {
        payload: Prisma.$JobOfferPayload<ExtArgs>;
        fields: Prisma.JobOfferFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobOfferFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobOfferFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          findFirst: {
            args: Prisma.JobOfferFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobOfferFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          findMany: {
            args: Prisma.JobOfferFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[];
          };
          create: {
            args: Prisma.JobOfferCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          createMany: {
            args: Prisma.JobOfferCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobOfferCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[];
          };
          delete: {
            args: Prisma.JobOfferDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          update: {
            args: Prisma.JobOfferUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          deleteMany: {
            args: Prisma.JobOfferDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobOfferUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.JobOfferUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[];
          };
          upsert: {
            args: Prisma.JobOfferUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>;
          };
          aggregate: {
            args: Prisma.JobOfferAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobOffer>;
          };
          groupBy: {
            args: Prisma.JobOfferGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobOfferGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobOfferCountArgs<ExtArgs>;
            result: $Utils.Optional<JobOfferCountAggregateOutputType> | number;
          };
        };
      };
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>;
        fields: Prisma.CompanyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>;
        fields: Prisma.SkillFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[];
          };
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[];
          };
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[];
          };
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>;
          };
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSkill>;
          };
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SkillGroupByOutputType>[];
          };
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>;
            result: $Utils.Optional<SkillCountAggregateOutputType> | number;
          };
        };
      };
      JobSkill: {
        payload: Prisma.$JobSkillPayload<ExtArgs>;
        fields: Prisma.JobSkillFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobSkillFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobSkillFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          findFirst: {
            args: Prisma.JobSkillFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobSkillFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          findMany: {
            args: Prisma.JobSkillFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[];
          };
          create: {
            args: Prisma.JobSkillCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          createMany: {
            args: Prisma.JobSkillCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobSkillCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[];
          };
          delete: {
            args: Prisma.JobSkillDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          update: {
            args: Prisma.JobSkillUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          deleteMany: {
            args: Prisma.JobSkillDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobSkillUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.JobSkillUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[];
          };
          upsert: {
            args: Prisma.JobSkillUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>;
          };
          aggregate: {
            args: Prisma.JobSkillAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobSkill>;
          };
          groupBy: {
            args: Prisma.JobSkillGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobSkillGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobSkillCountArgs<ExtArgs>;
            result: $Utils.Optional<JobSkillCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    jobOffer?: JobOfferOmit;
    company?: CompanyOmit;
    skill?: SkillOmit;
    jobSkill?: JobSkillOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type JobOfferCountOutputType
   */

  export type JobOfferCountOutputType = {
    skills: number;
  };

  export type JobOfferCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    skills?: boolean | JobOfferCountOutputTypeCountSkillsArgs;
  };

  // Custom InputTypes
  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOfferCountOutputType
     */
    select?: JobOfferCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeCountSkillsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobSkillWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobs: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | CompanyCountOutputTypeCountJobsArgs;
  };

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobOfferWhereInput;
  };

  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    jobs: number;
  };

  export type SkillCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | SkillCountOutputTypeCountJobsArgs;
  };

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobSkillWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model JobOffer
   */

  export type AggregateJobOffer = {
    _count: JobOfferCountAggregateOutputType | null;
    _avg: JobOfferAvgAggregateOutputType | null;
    _sum: JobOfferSumAggregateOutputType | null;
    _min: JobOfferMinAggregateOutputType | null;
    _max: JobOfferMaxAggregateOutputType | null;
  };

  export type JobOfferAvgAggregateOutputType = {
    salaryMin: number | null;
    salaryMax: number | null;
  };

  export type JobOfferSumAggregateOutputType = {
    salaryMin: number | null;
    salaryMax: number | null;
  };

  export type JobOfferMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    location: string | null;
    type: string | null;
    salaryMin: number | null;
    salaryMax: number | null;
    postedDate: Date | null;
    companyId: string | null;
  };

  export type JobOfferMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    location: string | null;
    type: string | null;
    salaryMin: number | null;
    salaryMax: number | null;
    postedDate: Date | null;
    companyId: string | null;
  };

  export type JobOfferCountAggregateOutputType = {
    id: number;
    title: number;
    location: number;
    type: number;
    salaryMin: number;
    salaryMax: number;
    postedDate: number;
    companyId: number;
    _all: number;
  };

  export type JobOfferAvgAggregateInputType = {
    salaryMin?: true;
    salaryMax?: true;
  };

  export type JobOfferSumAggregateInputType = {
    salaryMin?: true;
    salaryMax?: true;
  };

  export type JobOfferMinAggregateInputType = {
    id?: true;
    title?: true;
    location?: true;
    type?: true;
    salaryMin?: true;
    salaryMax?: true;
    postedDate?: true;
    companyId?: true;
  };

  export type JobOfferMaxAggregateInputType = {
    id?: true;
    title?: true;
    location?: true;
    type?: true;
    salaryMin?: true;
    salaryMax?: true;
    postedDate?: true;
    companyId?: true;
  };

  export type JobOfferCountAggregateInputType = {
    id?: true;
    title?: true;
    location?: true;
    type?: true;
    salaryMin?: true;
    salaryMax?: true;
    postedDate?: true;
    companyId?: true;
    _all?: true;
  };

  export type JobOfferAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobOffer to aggregate.
     */
    where?: JobOfferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobOffers to fetch.
     */
    orderBy?:
      | JobOfferOrderByWithRelationInput
      | JobOfferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobOfferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobOffers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobOffers
     **/
    _count?: true | JobOfferCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: JobOfferAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: JobOfferSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobOfferMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobOfferMaxAggregateInputType;
  };

  export type GetJobOfferAggregateType<T extends JobOfferAggregateArgs> = {
    [P in keyof T & keyof AggregateJobOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOffer[P]>
      : GetScalarType<T[P], AggregateJobOffer[P]>;
  };

  export type JobOfferGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobOfferWhereInput;
    orderBy?:
      | JobOfferOrderByWithAggregationInput
      | JobOfferOrderByWithAggregationInput[];
    by: JobOfferScalarFieldEnum[] | JobOfferScalarFieldEnum;
    having?: JobOfferScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobOfferCountAggregateInputType | true;
    _avg?: JobOfferAvgAggregateInputType;
    _sum?: JobOfferSumAggregateInputType;
    _min?: JobOfferMinAggregateInputType;
    _max?: JobOfferMaxAggregateInputType;
  };

  export type JobOfferGroupByOutputType = {
    id: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date;
    companyId: string;
    _count: JobOfferCountAggregateOutputType | null;
    _avg: JobOfferAvgAggregateOutputType | null;
    _sum: JobOfferSumAggregateOutputType | null;
    _min: JobOfferMinAggregateOutputType | null;
    _max: JobOfferMaxAggregateOutputType | null;
  };

  type GetJobOfferGroupByPayload<T extends JobOfferGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<JobOfferGroupByOutputType, T['by']> & {
          [P in keyof T & keyof JobOfferGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
            : GetScalarType<T[P], JobOfferGroupByOutputType[P]>;
        }
      >
    >;

  export type JobOfferSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      location?: boolean;
      type?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      postedDate?: boolean;
      companyId?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      skills?: boolean | JobOffer$skillsArgs<ExtArgs>;
      _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobOffer']
  >;

  export type JobOfferSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      location?: boolean;
      type?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      postedDate?: boolean;
      companyId?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobOffer']
  >;

  export type JobOfferSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      location?: boolean;
      type?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      postedDate?: boolean;
      companyId?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobOffer']
  >;

  export type JobOfferSelectScalar = {
    id?: boolean;
    title?: boolean;
    location?: boolean;
    type?: boolean;
    salaryMin?: boolean;
    salaryMax?: boolean;
    postedDate?: boolean;
    companyId?: boolean;
  };

  export type JobOfferOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'location'
    | 'type'
    | 'salaryMin'
    | 'salaryMax'
    | 'postedDate'
    | 'companyId',
    ExtArgs['result']['jobOffer']
  >;
  export type JobOfferInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    skills?: boolean | JobOffer$skillsArgs<ExtArgs>;
    _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type JobOfferIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type JobOfferIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $JobOfferPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'JobOffer';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      skills: Prisma.$JobSkillPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        location: string;
        type: string;
        salaryMin: number;
        salaryMax: number;
        postedDate: Date;
        companyId: string;
      },
      ExtArgs['result']['jobOffer']
    >;
    composites: {};
  };

  type JobOfferGetPayload<
    S extends boolean | null | undefined | JobOfferDefaultArgs,
  > = $Result.GetResult<Prisma.$JobOfferPayload, S>;

  type JobOfferCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobOfferCountAggregateInputType | true;
  };

  export interface JobOfferDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['JobOffer'];
      meta: { name: 'JobOffer' };
    };
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
    findUnique<T extends JobOfferFindUniqueArgs>(
      args: SelectSubset<T, JobOfferFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

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
    findUniqueOrThrow<T extends JobOfferFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobOfferFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    findFirst<T extends JobOfferFindFirstArgs>(
      args?: SelectSubset<T, JobOfferFindFirstArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

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
    findFirstOrThrow<T extends JobOfferFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobOfferFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    findMany<T extends JobOfferFindManyArgs>(
      args?: SelectSubset<T, JobOfferFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

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
    create<T extends JobOfferCreateArgs>(
      args: SelectSubset<T, JobOfferCreateArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    createMany<T extends JobOfferCreateManyArgs>(
      args?: SelectSubset<T, JobOfferCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends JobOfferCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobOfferCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

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
    delete<T extends JobOfferDeleteArgs>(
      args: SelectSubset<T, JobOfferDeleteArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    update<T extends JobOfferUpdateArgs>(
      args: SelectSubset<T, JobOfferUpdateArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    deleteMany<T extends JobOfferDeleteManyArgs>(
      args?: SelectSubset<T, JobOfferDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends JobOfferUpdateManyArgs>(
      args: SelectSubset<T, JobOfferUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends JobOfferUpdateManyAndReturnArgs>(
      args: SelectSubset<T, JobOfferUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

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
    upsert<T extends JobOfferUpsertArgs>(
      args: SelectSubset<T, JobOfferUpsertArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      $Result.GetResult<
        Prisma.$JobOfferPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    >;

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
    aggregate<T extends JobOfferAggregateArgs>(
      args: Subset<T, JobOfferAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobOfferAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobOfferGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetJobOfferGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__JobOfferClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CompanyDefaultArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      | $Result.GetResult<
          Prisma.$CompanyPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    skills<T extends JobOffer$skillsArgs<ExtArgs> = {}>(
      args?: Subset<T, JobOffer$skillsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobSkillPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobOffer model
   */
  interface JobOfferFieldRefs {
    readonly id: FieldRef<'JobOffer', 'String'>;
    readonly title: FieldRef<'JobOffer', 'String'>;
    readonly location: FieldRef<'JobOffer', 'String'>;
    readonly type: FieldRef<'JobOffer', 'String'>;
    readonly salaryMin: FieldRef<'JobOffer', 'Int'>;
    readonly salaryMax: FieldRef<'JobOffer', 'Int'>;
    readonly postedDate: FieldRef<'JobOffer', 'DateTime'>;
    readonly companyId: FieldRef<'JobOffer', 'String'>;
  }

  // Custom InputTypes
  /**
   * JobOffer findUnique
   */
  export type JobOfferFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput;
  };

  /**
   * JobOffer findUniqueOrThrow
   */
  export type JobOfferFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput;
  };

  /**
   * JobOffer findFirst
   */
  export type JobOfferFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobOffers to fetch.
     */
    orderBy?:
      | JobOfferOrderByWithRelationInput
      | JobOfferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobOffers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[];
  };

  /**
   * JobOffer findFirstOrThrow
   */
  export type JobOfferFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobOffers to fetch.
     */
    orderBy?:
      | JobOfferOrderByWithRelationInput
      | JobOfferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobOffers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[];
  };

  /**
   * JobOffer findMany
   */
  export type JobOfferFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter, which JobOffers to fetch.
     */
    where?: JobOfferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobOffers to fetch.
     */
    orderBy?:
      | JobOfferOrderByWithRelationInput
      | JobOfferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobOffers.
     */
    skip?: number;
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[];
  };

  /**
   * JobOffer create
   */
  export type JobOfferCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobOffer.
     */
    data: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>;
  };

  /**
   * JobOffer createMany
   */
  export type JobOfferCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobOffer createManyAndReturn
   */
  export type JobOfferCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobOffer update
   */
  export type JobOfferUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobOffer.
     */
    data: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>;
    /**
     * Choose, which JobOffer to update.
     */
    where: JobOfferWhereUniqueInput;
  };

  /**
   * JobOffer updateMany
   */
  export type JobOfferUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobOffers.
     */
    data: XOR<
      JobOfferUpdateManyMutationInput,
      JobOfferUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput;
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number;
  };

  /**
   * JobOffer updateManyAndReturn
   */
  export type JobOfferUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * The data used to update JobOffers.
     */
    data: XOR<
      JobOfferUpdateManyMutationInput,
      JobOfferUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput;
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobOffer upsert
   */
  export type JobOfferUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobOffer to update in case it exists.
     */
    where: JobOfferWhereUniqueInput;
    /**
     * In case the JobOffer found by the `where` argument doesn't exist, create a new JobOffer with this data.
     */
    create: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>;
    /**
     * In case the JobOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>;
  };

  /**
   * JobOffer delete
   */
  export type JobOfferDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    /**
     * Filter which JobOffer to delete.
     */
    where: JobOfferWhereUniqueInput;
  };

  /**
   * JobOffer deleteMany
   */
  export type JobOfferDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobOffers to delete
     */
    where?: JobOfferWhereInput;
    /**
     * Limit how many JobOffers to delete.
     */
    limit?: number;
  };

  /**
   * JobOffer.skills
   */
  export type JobOffer$skillsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    where?: JobSkillWhereInput;
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    cursor?: JobSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[];
  };

  /**
   * JobOffer without action
   */
  export type JobOfferDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
  };

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    industry: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    industry: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    name: number;
    industry: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    name?: true;
    industry?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    name?: true;
    industry?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    name?: true;
    industry?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type CompanyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyWhereInput;
    orderBy?:
      | CompanyOrderByWithAggregationInput
      | CompanyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    name: string;
    industry: string | null;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompanyGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
        }
      >
    >;

  export type CompanySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      industry?: boolean;
      jobs?: boolean | Company$jobsArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      industry?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      industry?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectScalar = {
    id?: boolean;
    name?: boolean;
    industry?: boolean;
  };

  export type CompanyOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'industry',
    ExtArgs['result']['company']
  >;
  export type CompanyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | Company$jobsArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CompanyIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CompanyIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CompanyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Company';
    objects: {
      jobs: Prisma.$JobOfferPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        industry: string | null;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyDefaultArgs,
  > = $Result.GetResult<Prisma.$CompanyPayload, S>;

  type CompanyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface CompanyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Company'];
      meta: { name: 'Company' };
    };
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     */
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     */
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCompanyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Company model
     */
    readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    jobs<T extends Company$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobOfferPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<'Company', 'String'>;
    readonly name: FieldRef<'Company', 'String'>;
    readonly industry: FieldRef<'Company', 'String'>;
  }

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company create
   */
  export type CompanyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
  };

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Company update
   */
  export type CompanyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to update.
     */
    limit?: number;
  };

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to update.
     */
    limit?: number;
  };

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput;
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
  };

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to delete.
     */
    limit?: number;
  };

  /**
   * Company.jobs
   */
  export type Company$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null;
    where?: JobOfferWhereInput;
    orderBy?:
      | JobOfferOrderByWithRelationInput
      | JobOfferOrderByWithRelationInput[];
    cursor?: JobOfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[];
  };

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
  };

  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
  };

  export type SkillMinAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type SkillMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type SkillCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type SkillMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SkillMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SkillCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type SkillAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Skills
     **/
    _count?: true | SkillCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SkillMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SkillMaxAggregateInputType;
  };

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
    [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>;
  };

  export type SkillGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SkillWhereInput;
    orderBy?:
      | SkillOrderByWithAggregationInput
      | SkillOrderByWithAggregationInput[];
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum;
    having?: SkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SkillCountAggregateInputType | true;
    _min?: SkillMinAggregateInputType;
    _max?: SkillMaxAggregateInputType;
  };

  export type SkillGroupByOutputType = {
    id: string;
    name: string;
    _count: SkillCountAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
  };

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SkillGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SkillGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>;
        }
      >
    >;

  export type SkillSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      jobs?: boolean | Skill$jobsArgs<ExtArgs>;
      _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['skill']
  >;

  export type SkillSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['skill']
  >;

  export type SkillSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['skill']
  >;

  export type SkillSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type SkillOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['skill']>;
  export type SkillInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | Skill$jobsArgs<ExtArgs>;
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SkillIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type SkillIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $SkillPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Skill';
    objects: {
      jobs: Prisma.$JobSkillPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
      },
      ExtArgs['result']['skill']
    >;
    composites: {};
  };

  type SkillGetPayload<
    S extends boolean | null | undefined | SkillDefaultArgs,
  > = $Result.GetResult<Prisma.$SkillPayload, S>;

  type SkillCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SkillCountAggregateInputType | true;
  };

  export interface SkillDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Skill'];
      meta: { name: 'Skill' };
    };
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(
      args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(
      args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     *
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SkillFindManyArgs>(
      args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     *
     */
    create<T extends SkillCreateArgs>(
      args: SelectSubset<T, SkillCreateArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SkillCreateManyArgs>(
      args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     *
     */
    delete<T extends SkillDeleteArgs>(
      args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SkillUpdateArgs>(
      args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SkillDeleteManyArgs>(
      args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SkillUpdateManyArgs>(
      args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(
      args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      $Result.GetResult<
        Prisma.$SkillPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
     **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(
      args: Subset<T, SkillAggregateArgs>,
    ): Prisma.PrismaPromise<GetSkillAggregateType<T>>;

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSkillGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Skill model
     */
    readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    jobs<T extends Skill$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, Skill$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobSkillPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<'Skill', 'String'>;
    readonly name: FieldRef<'Skill', 'String'>;
  }

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput;
  };

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput;
  };

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[];
  };

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[];
  };

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number;
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[];
  };

  /**
   * Skill create
   */
  export type SkillCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>;
  };

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Skill update
   */
  export type SkillUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>;
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput;
  };

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>;
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput;
    /**
     * Limit how many Skills to update.
     */
    limit?: number;
  };

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>;
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput;
    /**
     * Limit how many Skills to update.
     */
    limit?: number;
  };

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput;
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>;
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>;
  };

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput;
  };

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput;
    /**
     * Limit how many Skills to delete.
     */
    limit?: number;
  };

  /**
   * Skill.jobs
   */
  export type Skill$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    where?: JobSkillWhereInput;
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    cursor?: JobSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[];
  };

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null;
  };

  /**
   * Model JobSkill
   */

  export type AggregateJobSkill = {
    _count: JobSkillCountAggregateOutputType | null;
    _min: JobSkillMinAggregateOutputType | null;
    _max: JobSkillMaxAggregateOutputType | null;
  };

  export type JobSkillMinAggregateOutputType = {
    jobId: string | null;
    skillId: string | null;
  };

  export type JobSkillMaxAggregateOutputType = {
    jobId: string | null;
    skillId: string | null;
  };

  export type JobSkillCountAggregateOutputType = {
    jobId: number;
    skillId: number;
    _all: number;
  };

  export type JobSkillMinAggregateInputType = {
    jobId?: true;
    skillId?: true;
  };

  export type JobSkillMaxAggregateInputType = {
    jobId?: true;
    skillId?: true;
  };

  export type JobSkillCountAggregateInputType = {
    jobId?: true;
    skillId?: true;
    _all?: true;
  };

  export type JobSkillAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobSkill to aggregate.
     */
    where?: JobSkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobSkills to fetch.
     */
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobSkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobSkills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobSkills
     **/
    _count?: true | JobSkillCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobSkillMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobSkillMaxAggregateInputType;
  };

  export type GetJobSkillAggregateType<T extends JobSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateJobSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSkill[P]>
      : GetScalarType<T[P], AggregateJobSkill[P]>;
  };

  export type JobSkillGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobSkillWhereInput;
    orderBy?:
      | JobSkillOrderByWithAggregationInput
      | JobSkillOrderByWithAggregationInput[];
    by: JobSkillScalarFieldEnum[] | JobSkillScalarFieldEnum;
    having?: JobSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobSkillCountAggregateInputType | true;
    _min?: JobSkillMinAggregateInputType;
    _max?: JobSkillMaxAggregateInputType;
  };

  export type JobSkillGroupByOutputType = {
    jobId: string;
    skillId: string;
    _count: JobSkillCountAggregateOutputType | null;
    _min: JobSkillMinAggregateOutputType | null;
    _max: JobSkillMaxAggregateOutputType | null;
  };

  type GetJobSkillGroupByPayload<T extends JobSkillGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<JobSkillGroupByOutputType, T['by']> & {
          [P in keyof T & keyof JobSkillGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSkillGroupByOutputType[P]>
            : GetScalarType<T[P], JobSkillGroupByOutputType[P]>;
        }
      >
    >;

  export type JobSkillSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      jobId?: boolean;
      skillId?: boolean;
      job?: boolean | JobOfferDefaultArgs<ExtArgs>;
      skill?: boolean | SkillDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobSkill']
  >;

  export type JobSkillSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      jobId?: boolean;
      skillId?: boolean;
      job?: boolean | JobOfferDefaultArgs<ExtArgs>;
      skill?: boolean | SkillDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobSkill']
  >;

  export type JobSkillSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      jobId?: boolean;
      skillId?: boolean;
      job?: boolean | JobOfferDefaultArgs<ExtArgs>;
      skill?: boolean | SkillDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobSkill']
  >;

  export type JobSkillSelectScalar = {
    jobId?: boolean;
    skillId?: boolean;
  };

  export type JobSkillOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'jobId' | 'skillId', ExtArgs['result']['jobSkill']>;
  export type JobSkillInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobOfferDefaultArgs<ExtArgs>;
    skill?: boolean | SkillDefaultArgs<ExtArgs>;
  };
  export type JobSkillIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobOfferDefaultArgs<ExtArgs>;
    skill?: boolean | SkillDefaultArgs<ExtArgs>;
  };
  export type JobSkillIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobOfferDefaultArgs<ExtArgs>;
    skill?: boolean | SkillDefaultArgs<ExtArgs>;
  };

  export type $JobSkillPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'JobSkill';
    objects: {
      job: Prisma.$JobOfferPayload<ExtArgs>;
      skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        jobId: string;
        skillId: string;
      },
      ExtArgs['result']['jobSkill']
    >;
    composites: {};
  };

  type JobSkillGetPayload<
    S extends boolean | null | undefined | JobSkillDefaultArgs,
  > = $Result.GetResult<Prisma.$JobSkillPayload, S>;

  type JobSkillCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobSkillCountAggregateInputType | true;
  };

  export interface JobSkillDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['JobSkill'];
      meta: { name: 'JobSkill' };
    };
    /**
     * Find zero or one JobSkill that matches the filter.
     * @param {JobSkillFindUniqueArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSkillFindUniqueArgs>(
      args: SelectSubset<T, JobSkillFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one JobSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSkillFindUniqueOrThrowArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSkillFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobSkillFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first JobSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindFirstArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSkillFindFirstArgs>(
      args?: SelectSubset<T, JobSkillFindFirstArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first JobSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindFirstOrThrowArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSkillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobSkillFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more JobSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSkills
     * const jobSkills = await prisma.jobSkill.findMany()
     *
     * // Get first 10 JobSkills
     * const jobSkills = await prisma.jobSkill.findMany({ take: 10 })
     *
     * // Only select the `jobId`
     * const jobSkillWithJobIdOnly = await prisma.jobSkill.findMany({ select: { jobId: true } })
     *
     */
    findMany<T extends JobSkillFindManyArgs>(
      args?: SelectSubset<T, JobSkillFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a JobSkill.
     * @param {JobSkillCreateArgs} args - Arguments to create a JobSkill.
     * @example
     * // Create one JobSkill
     * const JobSkill = await prisma.jobSkill.create({
     *   data: {
     *     // ... data to create a JobSkill
     *   }
     * })
     *
     */
    create<T extends JobSkillCreateArgs>(
      args: SelectSubset<T, JobSkillCreateArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many JobSkills.
     * @param {JobSkillCreateManyArgs} args - Arguments to create many JobSkills.
     * @example
     * // Create many JobSkills
     * const jobSkill = await prisma.jobSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobSkillCreateManyArgs>(
      args?: SelectSubset<T, JobSkillCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many JobSkills and returns the data saved in the database.
     * @param {JobSkillCreateManyAndReturnArgs} args - Arguments to create many JobSkills.
     * @example
     * // Create many JobSkills
     * const jobSkill = await prisma.jobSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobSkills and only return the `jobId`
     * const jobSkillWithJobIdOnly = await prisma.jobSkill.createManyAndReturn({
     *   select: { jobId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobSkillCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobSkillCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a JobSkill.
     * @param {JobSkillDeleteArgs} args - Arguments to delete one JobSkill.
     * @example
     * // Delete one JobSkill
     * const JobSkill = await prisma.jobSkill.delete({
     *   where: {
     *     // ... filter to delete one JobSkill
     *   }
     * })
     *
     */
    delete<T extends JobSkillDeleteArgs>(
      args: SelectSubset<T, JobSkillDeleteArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one JobSkill.
     * @param {JobSkillUpdateArgs} args - Arguments to update one JobSkill.
     * @example
     * // Update one JobSkill
     * const jobSkill = await prisma.jobSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobSkillUpdateArgs>(
      args: SelectSubset<T, JobSkillUpdateArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more JobSkills.
     * @param {JobSkillDeleteManyArgs} args - Arguments to filter JobSkills to delete.
     * @example
     * // Delete a few JobSkills
     * const { count } = await prisma.jobSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobSkillDeleteManyArgs>(
      args?: SelectSubset<T, JobSkillDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSkills
     * const jobSkill = await prisma.jobSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobSkillUpdateManyArgs>(
      args: SelectSubset<T, JobSkillUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobSkills and returns the data updated in the database.
     * @param {JobSkillUpdateManyAndReturnArgs} args - Arguments to update many JobSkills.
     * @example
     * // Update many JobSkills
     * const jobSkill = await prisma.jobSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JobSkills and only return the `jobId`
     * const jobSkillWithJobIdOnly = await prisma.jobSkill.updateManyAndReturn({
     *   select: { jobId: true },
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
    updateManyAndReturn<T extends JobSkillUpdateManyAndReturnArgs>(
      args: SelectSubset<T, JobSkillUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one JobSkill.
     * @param {JobSkillUpsertArgs} args - Arguments to update or create a JobSkill.
     * @example
     * // Update or create a JobSkill
     * const jobSkill = await prisma.jobSkill.upsert({
     *   create: {
     *     // ... data to create a JobSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSkill we want to update
     *   }
     * })
     */
    upsert<T extends JobSkillUpsertArgs>(
      args: SelectSubset<T, JobSkillUpsertArgs<ExtArgs>>,
    ): Prisma__JobSkillClient<
      $Result.GetResult<
        Prisma.$JobSkillPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of JobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillCountArgs} args - Arguments to filter JobSkills to count.
     * @example
     * // Count the number of JobSkills
     * const count = await prisma.jobSkill.count({
     *   where: {
     *     // ... the filter for the JobSkills we want to count
     *   }
     * })
     **/
    count<T extends JobSkillCountArgs>(
      args?: Subset<T, JobSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSkillCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a JobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobSkillAggregateArgs>(
      args: Subset<T, JobSkillAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobSkillAggregateType<T>>;

    /**
     * Group by JobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillGroupByArgs} args - Group by arguments.
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
      T extends JobSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSkillGroupByArgs['orderBy'] }
        : { orderBy?: JobSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobSkillGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetJobSkillGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobSkill model
     */
    readonly fields: JobSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSkillClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobOfferDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>,
    ): Prisma__JobOfferClient<
      | $Result.GetResult<
          Prisma.$JobOfferPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SkillDefaultArgs<ExtArgs>>,
    ): Prisma__SkillClient<
      | $Result.GetResult<
          Prisma.$SkillPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobSkill model
   */
  interface JobSkillFieldRefs {
    readonly jobId: FieldRef<'JobSkill', 'String'>;
    readonly skillId: FieldRef<'JobSkill', 'String'>;
  }

  // Custom InputTypes
  /**
   * JobSkill findUnique
   */
  export type JobSkillFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter, which JobSkill to fetch.
     */
    where: JobSkillWhereUniqueInput;
  };

  /**
   * JobSkill findUniqueOrThrow
   */
  export type JobSkillFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter, which JobSkill to fetch.
     */
    where: JobSkillWhereUniqueInput;
  };

  /**
   * JobSkill findFirst
   */
  export type JobSkillFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter, which JobSkill to fetch.
     */
    where?: JobSkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobSkills to fetch.
     */
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobSkills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobSkills.
     */
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[];
  };

  /**
   * JobSkill findFirstOrThrow
   */
  export type JobSkillFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter, which JobSkill to fetch.
     */
    where?: JobSkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobSkills to fetch.
     */
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobSkills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobSkills.
     */
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[];
  };

  /**
   * JobSkill findMany
   */
  export type JobSkillFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter, which JobSkills to fetch.
     */
    where?: JobSkillWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobSkills to fetch.
     */
    orderBy?:
      | JobSkillOrderByWithRelationInput
      | JobSkillOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobSkills.
     */
    skip?: number;
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[];
  };

  /**
   * JobSkill create
   */
  export type JobSkillCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobSkill.
     */
    data: XOR<JobSkillCreateInput, JobSkillUncheckedCreateInput>;
  };

  /**
   * JobSkill createMany
   */
  export type JobSkillCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobSkills.
     */
    data: JobSkillCreateManyInput | JobSkillCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobSkill createManyAndReturn
   */
  export type JobSkillCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * The data used to create many JobSkills.
     */
    data: JobSkillCreateManyInput | JobSkillCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobSkill update
   */
  export type JobSkillUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobSkill.
     */
    data: XOR<JobSkillUpdateInput, JobSkillUncheckedUpdateInput>;
    /**
     * Choose, which JobSkill to update.
     */
    where: JobSkillWhereUniqueInput;
  };

  /**
   * JobSkill updateMany
   */
  export type JobSkillUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobSkills.
     */
    data: XOR<
      JobSkillUpdateManyMutationInput,
      JobSkillUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobSkills to update
     */
    where?: JobSkillWhereInput;
    /**
     * Limit how many JobSkills to update.
     */
    limit?: number;
  };

  /**
   * JobSkill updateManyAndReturn
   */
  export type JobSkillUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * The data used to update JobSkills.
     */
    data: XOR<
      JobSkillUpdateManyMutationInput,
      JobSkillUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobSkills to update
     */
    where?: JobSkillWhereInput;
    /**
     * Limit how many JobSkills to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobSkill upsert
   */
  export type JobSkillUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobSkill to update in case it exists.
     */
    where: JobSkillWhereUniqueInput;
    /**
     * In case the JobSkill found by the `where` argument doesn't exist, create a new JobSkill with this data.
     */
    create: XOR<JobSkillCreateInput, JobSkillUncheckedCreateInput>;
    /**
     * In case the JobSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSkillUpdateInput, JobSkillUncheckedUpdateInput>;
  };

  /**
   * JobSkill delete
   */
  export type JobSkillDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
    /**
     * Filter which JobSkill to delete.
     */
    where: JobSkillWhereUniqueInput;
  };

  /**
   * JobSkill deleteMany
   */
  export type JobSkillDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobSkills to delete
     */
    where?: JobSkillWhereInput;
    /**
     * Limit how many JobSkills to delete.
     */
    limit?: number;
  };

  /**
   * JobSkill without action
   */
  export type JobSkillDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const JobOfferScalarFieldEnum: {
    id: 'id';
    title: 'title';
    location: 'location';
    type: 'type';
    salaryMin: 'salaryMin';
    salaryMax: 'salaryMax';
    postedDate: 'postedDate';
    companyId: 'companyId';
  };

  export type JobOfferScalarFieldEnum =
    (typeof JobOfferScalarFieldEnum)[keyof typeof JobOfferScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    name: 'name';
    industry: 'industry';
  };

  export type CompanyScalarFieldEnum =
    (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const SkillScalarFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type SkillScalarFieldEnum =
    (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];

  export const JobSkillScalarFieldEnum: {
    jobId: 'jobId';
    skillId: 'skillId';
  };

  export type JobSkillScalarFieldEnum =
    (typeof JobSkillScalarFieldEnum)[keyof typeof JobSkillScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type JobOfferWhereInput = {
    AND?: JobOfferWhereInput | JobOfferWhereInput[];
    OR?: JobOfferWhereInput[];
    NOT?: JobOfferWhereInput | JobOfferWhereInput[];
    id?: StringFilter<'JobOffer'> | string;
    title?: StringFilter<'JobOffer'> | string;
    location?: StringFilter<'JobOffer'> | string;
    type?: StringFilter<'JobOffer'> | string;
    salaryMin?: IntFilter<'JobOffer'> | number;
    salaryMax?: IntFilter<'JobOffer'> | number;
    postedDate?: DateTimeFilter<'JobOffer'> | Date | string;
    companyId?: StringFilter<'JobOffer'> | string;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    skills?: JobSkillListRelationFilter;
  };

  export type JobOfferOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    location?: SortOrder;
    type?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    postedDate?: SortOrder;
    companyId?: SortOrder;
    company?: CompanyOrderByWithRelationInput;
    skills?: JobSkillOrderByRelationAggregateInput;
  };

  export type JobOfferWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      title_companyId?: JobOfferTitleCompanyIdCompoundUniqueInput;
      AND?: JobOfferWhereInput | JobOfferWhereInput[];
      OR?: JobOfferWhereInput[];
      NOT?: JobOfferWhereInput | JobOfferWhereInput[];
      title?: StringFilter<'JobOffer'> | string;
      location?: StringFilter<'JobOffer'> | string;
      type?: StringFilter<'JobOffer'> | string;
      salaryMin?: IntFilter<'JobOffer'> | number;
      salaryMax?: IntFilter<'JobOffer'> | number;
      postedDate?: DateTimeFilter<'JobOffer'> | Date | string;
      companyId?: StringFilter<'JobOffer'> | string;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      skills?: JobSkillListRelationFilter;
    },
    'id' | 'title_companyId'
  >;

  export type JobOfferOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    location?: SortOrder;
    type?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    postedDate?: SortOrder;
    companyId?: SortOrder;
    _count?: JobOfferCountOrderByAggregateInput;
    _avg?: JobOfferAvgOrderByAggregateInput;
    _max?: JobOfferMaxOrderByAggregateInput;
    _min?: JobOfferMinOrderByAggregateInput;
    _sum?: JobOfferSumOrderByAggregateInput;
  };

  export type JobOfferScalarWhereWithAggregatesInput = {
    AND?:
      | JobOfferScalarWhereWithAggregatesInput
      | JobOfferScalarWhereWithAggregatesInput[];
    OR?: JobOfferScalarWhereWithAggregatesInput[];
    NOT?:
      | JobOfferScalarWhereWithAggregatesInput
      | JobOfferScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'JobOffer'> | string;
    title?: StringWithAggregatesFilter<'JobOffer'> | string;
    location?: StringWithAggregatesFilter<'JobOffer'> | string;
    type?: StringWithAggregatesFilter<'JobOffer'> | string;
    salaryMin?: IntWithAggregatesFilter<'JobOffer'> | number;
    salaryMax?: IntWithAggregatesFilter<'JobOffer'> | number;
    postedDate?: DateTimeWithAggregatesFilter<'JobOffer'> | Date | string;
    companyId?: StringWithAggregatesFilter<'JobOffer'> | string;
  };

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[];
    OR?: CompanyWhereInput[];
    NOT?: CompanyWhereInput | CompanyWhereInput[];
    id?: StringFilter<'Company'> | string;
    name?: StringFilter<'Company'> | string;
    industry?: StringNullableFilter<'Company'> | string | null;
    jobs?: JobOfferListRelationFilter;
  };

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    industry?: SortOrderInput | SortOrder;
    jobs?: JobOfferOrderByRelationAggregateInput;
  };

  export type CompanyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: CompanyWhereInput | CompanyWhereInput[];
      OR?: CompanyWhereInput[];
      NOT?: CompanyWhereInput | CompanyWhereInput[];
      industry?: StringNullableFilter<'Company'> | string | null;
      jobs?: JobOfferListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    industry?: SortOrderInput | SortOrder;
    _count?: CompanyCountOrderByAggregateInput;
    _max?: CompanyMaxOrderByAggregateInput;
    _min?: CompanyMinOrderByAggregateInput;
  };

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    OR?: CompanyScalarWhereWithAggregatesInput[];
    NOT?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Company'> | string;
    name?: StringWithAggregatesFilter<'Company'> | string;
    industry?: StringNullableWithAggregatesFilter<'Company'> | string | null;
  };

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[];
    OR?: SkillWhereInput[];
    NOT?: SkillWhereInput | SkillWhereInput[];
    id?: StringFilter<'Skill'> | string;
    name?: StringFilter<'Skill'> | string;
    jobs?: JobSkillListRelationFilter;
  };

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    jobs?: JobSkillOrderByRelationAggregateInput;
  };

  export type SkillWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: SkillWhereInput | SkillWhereInput[];
      OR?: SkillWhereInput[];
      NOT?: SkillWhereInput | SkillWhereInput[];
      jobs?: JobSkillListRelationFilter;
    },
    'id' | 'name'
  >;

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: SkillCountOrderByAggregateInput;
    _max?: SkillMaxOrderByAggregateInput;
    _min?: SkillMinOrderByAggregateInput;
  };

  export type SkillScalarWhereWithAggregatesInput = {
    AND?:
      | SkillScalarWhereWithAggregatesInput
      | SkillScalarWhereWithAggregatesInput[];
    OR?: SkillScalarWhereWithAggregatesInput[];
    NOT?:
      | SkillScalarWhereWithAggregatesInput
      | SkillScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Skill'> | string;
    name?: StringWithAggregatesFilter<'Skill'> | string;
  };

  export type JobSkillWhereInput = {
    AND?: JobSkillWhereInput | JobSkillWhereInput[];
    OR?: JobSkillWhereInput[];
    NOT?: JobSkillWhereInput | JobSkillWhereInput[];
    jobId?: StringFilter<'JobSkill'> | string;
    skillId?: StringFilter<'JobSkill'> | string;
    job?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>;
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>;
  };

  export type JobSkillOrderByWithRelationInput = {
    jobId?: SortOrder;
    skillId?: SortOrder;
    job?: JobOfferOrderByWithRelationInput;
    skill?: SkillOrderByWithRelationInput;
  };

  export type JobSkillWhereUniqueInput = Prisma.AtLeast<
    {
      jobId_skillId?: JobSkillJobIdSkillIdCompoundUniqueInput;
      AND?: JobSkillWhereInput | JobSkillWhereInput[];
      OR?: JobSkillWhereInput[];
      NOT?: JobSkillWhereInput | JobSkillWhereInput[];
      jobId?: StringFilter<'JobSkill'> | string;
      skillId?: StringFilter<'JobSkill'> | string;
      job?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>;
      skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>;
    },
    'jobId_skillId'
  >;

  export type JobSkillOrderByWithAggregationInput = {
    jobId?: SortOrder;
    skillId?: SortOrder;
    _count?: JobSkillCountOrderByAggregateInput;
    _max?: JobSkillMaxOrderByAggregateInput;
    _min?: JobSkillMinOrderByAggregateInput;
  };

  export type JobSkillScalarWhereWithAggregatesInput = {
    AND?:
      | JobSkillScalarWhereWithAggregatesInput
      | JobSkillScalarWhereWithAggregatesInput[];
    OR?: JobSkillScalarWhereWithAggregatesInput[];
    NOT?:
      | JobSkillScalarWhereWithAggregatesInput
      | JobSkillScalarWhereWithAggregatesInput[];
    jobId?: StringWithAggregatesFilter<'JobSkill'> | string;
    skillId?: StringWithAggregatesFilter<'JobSkill'> | string;
  };

  export type JobOfferCreateInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    company: CompanyCreateNestedOneWithoutJobsInput;
    skills?: JobSkillCreateNestedManyWithoutJobInput;
  };

  export type JobOfferUncheckedCreateInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    companyId: string;
    skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput;
    skills?: JobSkillUpdateManyWithoutJobNestedInput;
  };

  export type JobOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: StringFieldUpdateOperationsInput | string;
    skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobOfferCreateManyInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    companyId: string;
  };

  export type JobOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: StringFieldUpdateOperationsInput | string;
  };

  export type CompanyCreateInput = {
    id?: string;
    name: string;
    industry?: string | null;
    jobs?: JobOfferCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateInput = {
    id?: string;
    name: string;
    industry?: string | null;
    jobs?: JobOfferUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobOfferUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobOfferUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyCreateManyInput = {
    id?: string;
    name: string;
    industry?: string | null;
  };

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SkillCreateInput = {
    id?: string;
    name: string;
    jobs?: JobSkillCreateNestedManyWithoutSkillInput;
  };

  export type SkillUncheckedCreateInput = {
    id?: string;
    name: string;
    jobs?: JobSkillUncheckedCreateNestedManyWithoutSkillInput;
  };

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    jobs?: JobSkillUpdateManyWithoutSkillNestedInput;
  };

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    jobs?: JobSkillUncheckedUpdateManyWithoutSkillNestedInput;
  };

  export type SkillCreateManyInput = {
    id?: string;
    name: string;
  };

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type JobSkillCreateInput = {
    job: JobOfferCreateNestedOneWithoutSkillsInput;
    skill: SkillCreateNestedOneWithoutJobsInput;
  };

  export type JobSkillUncheckedCreateInput = {
    jobId: string;
    skillId: string;
  };

  export type JobSkillUpdateInput = {
    job?: JobOfferUpdateOneRequiredWithoutSkillsNestedInput;
    skill?: SkillUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobSkillUncheckedUpdateInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    skillId?: StringFieldUpdateOperationsInput | string;
  };

  export type JobSkillCreateManyInput = {
    jobId: string;
    skillId: string;
  };

  export type JobSkillUpdateManyMutationInput = {};

  export type JobSkillUncheckedUpdateManyInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    skillId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput;
    isNot?: CompanyWhereInput;
  };

  export type JobSkillListRelationFilter = {
    every?: JobSkillWhereInput;
    some?: JobSkillWhereInput;
    none?: JobSkillWhereInput;
  };

  export type JobSkillOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type JobOfferTitleCompanyIdCompoundUniqueInput = {
    title: string;
    companyId: string;
  };

  export type JobOfferCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    location?: SortOrder;
    type?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    postedDate?: SortOrder;
    companyId?: SortOrder;
  };

  export type JobOfferAvgOrderByAggregateInput = {
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
  };

  export type JobOfferMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    location?: SortOrder;
    type?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    postedDate?: SortOrder;
    companyId?: SortOrder;
  };

  export type JobOfferMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    location?: SortOrder;
    type?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    postedDate?: SortOrder;
    companyId?: SortOrder;
  };

  export type JobOfferSumOrderByAggregateInput = {
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type JobOfferListRelationFilter = {
    every?: JobOfferWhereInput;
    some?: JobOfferWhereInput;
    none?: JobOfferWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type JobOfferOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    industry?: SortOrder;
  };

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    industry?: SortOrder;
  };

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    industry?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type JobOfferScalarRelationFilter = {
    is?: JobOfferWhereInput;
    isNot?: JobOfferWhereInput;
  };

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput;
    isNot?: SkillWhereInput;
  };

  export type JobSkillJobIdSkillIdCompoundUniqueInput = {
    jobId: string;
    skillId: string;
  };

  export type JobSkillCountOrderByAggregateInput = {
    jobId?: SortOrder;
    skillId?: SortOrder;
  };

  export type JobSkillMaxOrderByAggregateInput = {
    jobId?: SortOrder;
    skillId?: SortOrder;
  };

  export type JobSkillMinOrderByAggregateInput = {
    jobId?: SortOrder;
    skillId?: SortOrder;
  };

  export type CompanyCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      CompanyCreateWithoutJobsInput,
      CompanyUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type JobSkillCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutJobInput,
          JobSkillUncheckedCreateWithoutJobInput
        >
      | JobSkillCreateWithoutJobInput[]
      | JobSkillUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutJobInput
      | JobSkillCreateOrConnectWithoutJobInput[];
    createMany?: JobSkillCreateManyJobInputEnvelope;
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
  };

  export type JobSkillUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutJobInput,
          JobSkillUncheckedCreateWithoutJobInput
        >
      | JobSkillCreateWithoutJobInput[]
      | JobSkillUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutJobInput
      | JobSkillCreateOrConnectWithoutJobInput[];
    createMany?: JobSkillCreateManyJobInputEnvelope;
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CompanyUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      CompanyCreateWithoutJobsInput,
      CompanyUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput;
    upsert?: CompanyUpsertWithoutJobsInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutJobsInput,
        CompanyUpdateWithoutJobsInput
      >,
      CompanyUncheckedUpdateWithoutJobsInput
    >;
  };

  export type JobSkillUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutJobInput,
          JobSkillUncheckedCreateWithoutJobInput
        >
      | JobSkillCreateWithoutJobInput[]
      | JobSkillUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutJobInput
      | JobSkillCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobSkillUpsertWithWhereUniqueWithoutJobInput
      | JobSkillUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobSkillCreateManyJobInputEnvelope;
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    update?:
      | JobSkillUpdateWithWhereUniqueWithoutJobInput
      | JobSkillUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobSkillUpdateManyWithWhereWithoutJobInput
      | JobSkillUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
  };

  export type JobSkillUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutJobInput,
          JobSkillUncheckedCreateWithoutJobInput
        >
      | JobSkillCreateWithoutJobInput[]
      | JobSkillUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutJobInput
      | JobSkillCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobSkillUpsertWithWhereUniqueWithoutJobInput
      | JobSkillUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobSkillCreateManyJobInputEnvelope;
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    update?:
      | JobSkillUpdateWithWhereUniqueWithoutJobInput
      | JobSkillUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobSkillUpdateManyWithWhereWithoutJobInput
      | JobSkillUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
  };

  export type JobOfferCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          JobOfferCreateWithoutCompanyInput,
          JobOfferUncheckedCreateWithoutCompanyInput
        >
      | JobOfferCreateWithoutCompanyInput[]
      | JobOfferUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobOfferCreateOrConnectWithoutCompanyInput
      | JobOfferCreateOrConnectWithoutCompanyInput[];
    createMany?: JobOfferCreateManyCompanyInputEnvelope;
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
  };

  export type JobOfferUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          JobOfferCreateWithoutCompanyInput,
          JobOfferUncheckedCreateWithoutCompanyInput
        >
      | JobOfferCreateWithoutCompanyInput[]
      | JobOfferUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobOfferCreateOrConnectWithoutCompanyInput
      | JobOfferCreateOrConnectWithoutCompanyInput[];
    createMany?: JobOfferCreateManyCompanyInputEnvelope;
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type JobOfferUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          JobOfferCreateWithoutCompanyInput,
          JobOfferUncheckedCreateWithoutCompanyInput
        >
      | JobOfferCreateWithoutCompanyInput[]
      | JobOfferUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobOfferCreateOrConnectWithoutCompanyInput
      | JobOfferCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | JobOfferUpsertWithWhereUniqueWithoutCompanyInput
      | JobOfferUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: JobOfferCreateManyCompanyInputEnvelope;
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    update?:
      | JobOfferUpdateWithWhereUniqueWithoutCompanyInput
      | JobOfferUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | JobOfferUpdateManyWithWhereWithoutCompanyInput
      | JobOfferUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[];
  };

  export type JobOfferUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          JobOfferCreateWithoutCompanyInput,
          JobOfferUncheckedCreateWithoutCompanyInput
        >
      | JobOfferCreateWithoutCompanyInput[]
      | JobOfferUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobOfferCreateOrConnectWithoutCompanyInput
      | JobOfferCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | JobOfferUpsertWithWhereUniqueWithoutCompanyInput
      | JobOfferUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: JobOfferCreateManyCompanyInputEnvelope;
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[];
    update?:
      | JobOfferUpdateWithWhereUniqueWithoutCompanyInput
      | JobOfferUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | JobOfferUpdateManyWithWhereWithoutCompanyInput
      | JobOfferUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[];
  };

  export type JobSkillCreateNestedManyWithoutSkillInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutSkillInput,
          JobSkillUncheckedCreateWithoutSkillInput
        >
      | JobSkillCreateWithoutSkillInput[]
      | JobSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutSkillInput
      | JobSkillCreateOrConnectWithoutSkillInput[];
    createMany?: JobSkillCreateManySkillInputEnvelope;
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
  };

  export type JobSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutSkillInput,
          JobSkillUncheckedCreateWithoutSkillInput
        >
      | JobSkillCreateWithoutSkillInput[]
      | JobSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutSkillInput
      | JobSkillCreateOrConnectWithoutSkillInput[];
    createMany?: JobSkillCreateManySkillInputEnvelope;
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
  };

  export type JobSkillUpdateManyWithoutSkillNestedInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutSkillInput,
          JobSkillUncheckedCreateWithoutSkillInput
        >
      | JobSkillCreateWithoutSkillInput[]
      | JobSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutSkillInput
      | JobSkillCreateOrConnectWithoutSkillInput[];
    upsert?:
      | JobSkillUpsertWithWhereUniqueWithoutSkillInput
      | JobSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: JobSkillCreateManySkillInputEnvelope;
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    update?:
      | JobSkillUpdateWithWhereUniqueWithoutSkillInput
      | JobSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?:
      | JobSkillUpdateManyWithWhereWithoutSkillInput
      | JobSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
  };

  export type JobSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?:
      | XOR<
          JobSkillCreateWithoutSkillInput,
          JobSkillUncheckedCreateWithoutSkillInput
        >
      | JobSkillCreateWithoutSkillInput[]
      | JobSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?:
      | JobSkillCreateOrConnectWithoutSkillInput
      | JobSkillCreateOrConnectWithoutSkillInput[];
    upsert?:
      | JobSkillUpsertWithWhereUniqueWithoutSkillInput
      | JobSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: JobSkillCreateManySkillInputEnvelope;
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[];
    update?:
      | JobSkillUpdateWithWhereUniqueWithoutSkillInput
      | JobSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?:
      | JobSkillUpdateManyWithWhereWithoutSkillInput
      | JobSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
  };

  export type JobOfferCreateNestedOneWithoutSkillsInput = {
    create?: XOR<
      JobOfferCreateWithoutSkillsInput,
      JobOfferUncheckedCreateWithoutSkillsInput
    >;
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput;
    connect?: JobOfferWhereUniqueInput;
  };

  export type SkillCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      SkillCreateWithoutJobsInput,
      SkillUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: SkillCreateOrConnectWithoutJobsInput;
    connect?: SkillWhereUniqueInput;
  };

  export type JobOfferUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<
      JobOfferCreateWithoutSkillsInput,
      JobOfferUncheckedCreateWithoutSkillsInput
    >;
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput;
    upsert?: JobOfferUpsertWithoutSkillsInput;
    connect?: JobOfferWhereUniqueInput;
    update?: XOR<
      XOR<
        JobOfferUpdateToOneWithWhereWithoutSkillsInput,
        JobOfferUpdateWithoutSkillsInput
      >,
      JobOfferUncheckedUpdateWithoutSkillsInput
    >;
  };

  export type SkillUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      SkillCreateWithoutJobsInput,
      SkillUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: SkillCreateOrConnectWithoutJobsInput;
    upsert?: SkillUpsertWithoutJobsInput;
    connect?: SkillWhereUniqueInput;
    update?: XOR<
      XOR<
        SkillUpdateToOneWithWhereWithoutJobsInput,
        SkillUpdateWithoutJobsInput
      >,
      SkillUncheckedUpdateWithoutJobsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CompanyCreateWithoutJobsInput = {
    id?: string;
    name: string;
    industry?: string | null;
  };

  export type CompanyUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
    industry?: string | null;
  };

  export type CompanyCreateOrConnectWithoutJobsInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutJobsInput,
      CompanyUncheckedCreateWithoutJobsInput
    >;
  };

  export type JobSkillCreateWithoutJobInput = {
    skill: SkillCreateNestedOneWithoutJobsInput;
  };

  export type JobSkillUncheckedCreateWithoutJobInput = {
    skillId: string;
  };

  export type JobSkillCreateOrConnectWithoutJobInput = {
    where: JobSkillWhereUniqueInput;
    create: XOR<
      JobSkillCreateWithoutJobInput,
      JobSkillUncheckedCreateWithoutJobInput
    >;
  };

  export type JobSkillCreateManyJobInputEnvelope = {
    data: JobSkillCreateManyJobInput | JobSkillCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyUpsertWithoutJobsInput = {
    update: XOR<
      CompanyUpdateWithoutJobsInput,
      CompanyUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      CompanyCreateWithoutJobsInput,
      CompanyUncheckedCreateWithoutJobsInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutJobsInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutJobsInput,
      CompanyUncheckedUpdateWithoutJobsInput
    >;
  };

  export type CompanyUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompanyUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type JobSkillUpsertWithWhereUniqueWithoutJobInput = {
    where: JobSkillWhereUniqueInput;
    update: XOR<
      JobSkillUpdateWithoutJobInput,
      JobSkillUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      JobSkillCreateWithoutJobInput,
      JobSkillUncheckedCreateWithoutJobInput
    >;
  };

  export type JobSkillUpdateWithWhereUniqueWithoutJobInput = {
    where: JobSkillWhereUniqueInput;
    data: XOR<
      JobSkillUpdateWithoutJobInput,
      JobSkillUncheckedUpdateWithoutJobInput
    >;
  };

  export type JobSkillUpdateManyWithWhereWithoutJobInput = {
    where: JobSkillScalarWhereInput;
    data: XOR<
      JobSkillUpdateManyMutationInput,
      JobSkillUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type JobSkillScalarWhereInput = {
    AND?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
    OR?: JobSkillScalarWhereInput[];
    NOT?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[];
    jobId?: StringFilter<'JobSkill'> | string;
    skillId?: StringFilter<'JobSkill'> | string;
  };

  export type JobOfferCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    skills?: JobSkillCreateNestedManyWithoutJobInput;
  };

  export type JobOfferUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobOfferCreateOrConnectWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput;
    create: XOR<
      JobOfferCreateWithoutCompanyInput,
      JobOfferUncheckedCreateWithoutCompanyInput
    >;
  };

  export type JobOfferCreateManyCompanyInputEnvelope = {
    data: JobOfferCreateManyCompanyInput | JobOfferCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type JobOfferUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput;
    update: XOR<
      JobOfferUpdateWithoutCompanyInput,
      JobOfferUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      JobOfferCreateWithoutCompanyInput,
      JobOfferUncheckedCreateWithoutCompanyInput
    >;
  };

  export type JobOfferUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput;
    data: XOR<
      JobOfferUpdateWithoutCompanyInput,
      JobOfferUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type JobOfferUpdateManyWithWhereWithoutCompanyInput = {
    where: JobOfferScalarWhereInput;
    data: XOR<
      JobOfferUpdateManyMutationInput,
      JobOfferUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type JobOfferScalarWhereInput = {
    AND?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[];
    OR?: JobOfferScalarWhereInput[];
    NOT?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[];
    id?: StringFilter<'JobOffer'> | string;
    title?: StringFilter<'JobOffer'> | string;
    location?: StringFilter<'JobOffer'> | string;
    type?: StringFilter<'JobOffer'> | string;
    salaryMin?: IntFilter<'JobOffer'> | number;
    salaryMax?: IntFilter<'JobOffer'> | number;
    postedDate?: DateTimeFilter<'JobOffer'> | Date | string;
    companyId?: StringFilter<'JobOffer'> | string;
  };

  export type JobSkillCreateWithoutSkillInput = {
    job: JobOfferCreateNestedOneWithoutSkillsInput;
  };

  export type JobSkillUncheckedCreateWithoutSkillInput = {
    jobId: string;
  };

  export type JobSkillCreateOrConnectWithoutSkillInput = {
    where: JobSkillWhereUniqueInput;
    create: XOR<
      JobSkillCreateWithoutSkillInput,
      JobSkillUncheckedCreateWithoutSkillInput
    >;
  };

  export type JobSkillCreateManySkillInputEnvelope = {
    data: JobSkillCreateManySkillInput | JobSkillCreateManySkillInput[];
    skipDuplicates?: boolean;
  };

  export type JobSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: JobSkillWhereUniqueInput;
    update: XOR<
      JobSkillUpdateWithoutSkillInput,
      JobSkillUncheckedUpdateWithoutSkillInput
    >;
    create: XOR<
      JobSkillCreateWithoutSkillInput,
      JobSkillUncheckedCreateWithoutSkillInput
    >;
  };

  export type JobSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: JobSkillWhereUniqueInput;
    data: XOR<
      JobSkillUpdateWithoutSkillInput,
      JobSkillUncheckedUpdateWithoutSkillInput
    >;
  };

  export type JobSkillUpdateManyWithWhereWithoutSkillInput = {
    where: JobSkillScalarWhereInput;
    data: XOR<
      JobSkillUpdateManyMutationInput,
      JobSkillUncheckedUpdateManyWithoutSkillInput
    >;
  };

  export type JobOfferCreateWithoutSkillsInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    company: CompanyCreateNestedOneWithoutJobsInput;
  };

  export type JobOfferUncheckedCreateWithoutSkillsInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
    companyId: string;
  };

  export type JobOfferCreateOrConnectWithoutSkillsInput = {
    where: JobOfferWhereUniqueInput;
    create: XOR<
      JobOfferCreateWithoutSkillsInput,
      JobOfferUncheckedCreateWithoutSkillsInput
    >;
  };

  export type SkillCreateWithoutJobsInput = {
    id?: string;
    name: string;
  };

  export type SkillUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
  };

  export type SkillCreateOrConnectWithoutJobsInput = {
    where: SkillWhereUniqueInput;
    create: XOR<
      SkillCreateWithoutJobsInput,
      SkillUncheckedCreateWithoutJobsInput
    >;
  };

  export type JobOfferUpsertWithoutSkillsInput = {
    update: XOR<
      JobOfferUpdateWithoutSkillsInput,
      JobOfferUncheckedUpdateWithoutSkillsInput
    >;
    create: XOR<
      JobOfferCreateWithoutSkillsInput,
      JobOfferUncheckedCreateWithoutSkillsInput
    >;
    where?: JobOfferWhereInput;
  };

  export type JobOfferUpdateToOneWithWhereWithoutSkillsInput = {
    where?: JobOfferWhereInput;
    data: XOR<
      JobOfferUpdateWithoutSkillsInput,
      JobOfferUncheckedUpdateWithoutSkillsInput
    >;
  };

  export type JobOfferUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobOfferUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: StringFieldUpdateOperationsInput | string;
  };

  export type SkillUpsertWithoutJobsInput = {
    update: XOR<
      SkillUpdateWithoutJobsInput,
      SkillUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      SkillCreateWithoutJobsInput,
      SkillUncheckedCreateWithoutJobsInput
    >;
    where?: SkillWhereInput;
  };

  export type SkillUpdateToOneWithWhereWithoutJobsInput = {
    where?: SkillWhereInput;
    data: XOR<
      SkillUpdateWithoutJobsInput,
      SkillUncheckedUpdateWithoutJobsInput
    >;
  };

  export type SkillUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type SkillUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type JobSkillCreateManyJobInput = {
    skillId: string;
  };

  export type JobSkillUpdateWithoutJobInput = {
    skill?: SkillUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobSkillUncheckedUpdateWithoutJobInput = {
    skillId?: StringFieldUpdateOperationsInput | string;
  };

  export type JobSkillUncheckedUpdateManyWithoutJobInput = {
    skillId?: StringFieldUpdateOperationsInput | string;
  };

  export type JobOfferCreateManyCompanyInput = {
    id?: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    postedDate: Date | string;
  };

  export type JobOfferUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: JobSkillUpdateManyWithoutJobNestedInput;
  };

  export type JobOfferUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobOfferUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    salaryMin?: IntFieldUpdateOperationsInput | number;
    salaryMax?: IntFieldUpdateOperationsInput | number;
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobSkillCreateManySkillInput = {
    jobId: string;
  };

  export type JobSkillUpdateWithoutSkillInput = {
    job?: JobOfferUpdateOneRequiredWithoutSkillsNestedInput;
  };

  export type JobSkillUncheckedUpdateWithoutSkillInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
  };

  export type JobSkillUncheckedUpdateManyWithoutSkillInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
