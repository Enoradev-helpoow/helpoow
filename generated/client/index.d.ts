
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
 * Model Annonce
 * 
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Annonces
 * const annonces = await prisma.annonce.findMany()
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
   * // Fetch zero or more Annonces
   * const annonces = await prisma.annonce.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonce.findMany()
    * ```
    */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Annonce: 'Annonce'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "annonce"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>
        fields: Prisma.AnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          createMany: {
            args: Prisma.AnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonce>
          }
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number
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
    annonce?: AnnonceOmit
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
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  export type AnnonceAvgAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type AnnonceSumAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type AnnonceMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    date: Date | null
    duree: string | null
    utilisateur: string | null
    image: string | null
    prix: number | null
    localisation: string | null
    categorie: string | null
    createdAt: Date | null
  }

  export type AnnonceMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    date: Date | null
    duree: string | null
    utilisateur: string | null
    image: string | null
    prix: number | null
    localisation: string | null
    categorie: string | null
    createdAt: Date | null
  }

  export type AnnonceCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    date: number
    duree: number
    utilisateur: number
    image: number
    prix: number
    localisation: number
    categorie: number
    createdAt: number
    _all: number
  }


  export type AnnonceAvgAggregateInputType = {
    id?: true
    prix?: true
  }

  export type AnnonceSumAggregateInputType = {
    id?: true
    prix?: true
  }

  export type AnnonceMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    date?: true
    duree?: true
    utilisateur?: true
    image?: true
    prix?: true
    localisation?: true
    categorie?: true
    createdAt?: true
  }

  export type AnnonceMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    date?: true
    duree?: true
    utilisateur?: true
    image?: true
    prix?: true
    localisation?: true
    categorie?: true
    createdAt?: true
  }

  export type AnnonceCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    date?: true
    duree?: true
    utilisateur?: true
    image?: true
    prix?: true
    localisation?: true
    categorie?: true
    createdAt?: true
    _all?: true
  }

  export type AnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceMaxAggregateInputType
  }

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>
  }




  export type AnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithAggregationInput | AnnonceOrderByWithAggregationInput[]
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum
    having?: AnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceCountAggregateInputType | true
    _avg?: AnnonceAvgAggregateInputType
    _sum?: AnnonceSumAggregateInputType
    _min?: AnnonceMinAggregateInputType
    _max?: AnnonceMaxAggregateInputType
  }

  export type AnnonceGroupByOutputType = {
    id: number
    titre: string
    description: string
    date: Date
    duree: string
    utilisateur: string
    image: string
    prix: number
    localisation: string
    categorie: string
    createdAt: Date
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    date?: boolean
    duree?: boolean
    utilisateur?: boolean
    image?: boolean
    prix?: boolean
    localisation?: boolean
    categorie?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    date?: boolean
    duree?: boolean
    utilisateur?: boolean
    image?: boolean
    prix?: boolean
    localisation?: boolean
    categorie?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    date?: boolean
    duree?: boolean
    utilisateur?: boolean
    image?: boolean
    prix?: boolean
    localisation?: boolean
    categorie?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    date?: boolean
    duree?: boolean
    utilisateur?: boolean
    image?: boolean
    prix?: boolean
    localisation?: boolean
    categorie?: boolean
    createdAt?: boolean
  }

  export type AnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "date" | "duree" | "utilisateur" | "image" | "prix" | "localisation" | "categorie" | "createdAt", ExtArgs["result"]["annonce"]>

  export type $AnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonce"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string
      date: Date
      duree: string
      utilisateur: string
      image: string
      prix: number
      localisation: string
      categorie: string
      createdAt: Date
    }, ExtArgs["result"]["annonce"]>
    composites: {}
  }

  type AnnonceGetPayload<S extends boolean | null | undefined | AnnonceDefaultArgs> = $Result.GetResult<Prisma.$AnnoncePayload, S>

  type AnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnonceCountAggregateInputType | true
    }

  export interface AnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonce'], meta: { name: 'Annonce' } }
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceFindUniqueArgs>(args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceFindFirstArgs>(args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnonceFindManyArgs>(args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     * 
     */
    create<T extends AnnonceCreateArgs>(args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annonces.
     * @param {AnnonceCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnonceCreateManyArgs>(args?: SelectSubset<T, AnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annonces and returns the data saved in the database.
     * @param {AnnonceCreateManyAndReturnArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     * 
     */
    delete<T extends AnnonceDeleteArgs>(args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnonceUpdateArgs>(args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnonceDeleteManyArgs>(args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnonceUpdateManyArgs>(args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces and returns the data updated in the database.
     * @param {AnnonceUpdateManyAndReturnArgs} args - Arguments to update many Annonces.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceUpsertArgs>(args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceAggregateArgs>(args: Subset<T, AnnonceAggregateArgs>): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
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
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonce model
   */
  readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Annonce model
   */
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", 'Int'>
    readonly titre: FieldRef<"Annonce", 'String'>
    readonly description: FieldRef<"Annonce", 'String'>
    readonly date: FieldRef<"Annonce", 'DateTime'>
    readonly duree: FieldRef<"Annonce", 'String'>
    readonly utilisateur: FieldRef<"Annonce", 'String'>
    readonly image: FieldRef<"Annonce", 'String'>
    readonly prix: FieldRef<"Annonce", 'Int'>
    readonly localisation: FieldRef<"Annonce", 'String'>
    readonly categorie: FieldRef<"Annonce", 'String'>
    readonly createdAt: FieldRef<"Annonce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
  }

  /**
   * Annonce createMany
   */
  export type AnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annonce createManyAndReturn
   */
  export type AnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
  }

  /**
   * Annonce updateManyAndReturn
   */
  export type AnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
  }

  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
  }

  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to delete.
     */
    limit?: number
  }

  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
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


  export const AnnonceScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    date: 'date',
    duree: 'duree',
    utilisateur: 'utilisateur',
    image: 'image',
    prix: 'prix',
    localisation: 'localisation',
    categorie: 'categorie',
    createdAt: 'createdAt'
  };

  export type AnnonceScalarFieldEnum = (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    id?: IntFilter<"Annonce"> | number
    titre?: StringFilter<"Annonce"> | string
    description?: StringFilter<"Annonce"> | string
    date?: DateTimeFilter<"Annonce"> | Date | string
    duree?: StringFilter<"Annonce"> | string
    utilisateur?: StringFilter<"Annonce"> | string
    image?: StringFilter<"Annonce"> | string
    prix?: IntFilter<"Annonce"> | number
    localisation?: StringFilter<"Annonce"> | string
    categorie?: StringFilter<"Annonce"> | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
  }

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duree?: SortOrder
    utilisateur?: SortOrder
    image?: SortOrder
    prix?: SortOrder
    localisation?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    titre?: StringFilter<"Annonce"> | string
    description?: StringFilter<"Annonce"> | string
    date?: DateTimeFilter<"Annonce"> | Date | string
    duree?: StringFilter<"Annonce"> | string
    utilisateur?: StringFilter<"Annonce"> | string
    image?: StringFilter<"Annonce"> | string
    prix?: IntFilter<"Annonce"> | number
    localisation?: StringFilter<"Annonce"> | string
    categorie?: StringFilter<"Annonce"> | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
  }, "id">

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duree?: SortOrder
    utilisateur?: SortOrder
    image?: SortOrder
    prix?: SortOrder
    localisation?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    _count?: AnnonceCountOrderByAggregateInput
    _avg?: AnnonceAvgOrderByAggregateInput
    _max?: AnnonceMaxOrderByAggregateInput
    _min?: AnnonceMinOrderByAggregateInput
    _sum?: AnnonceSumOrderByAggregateInput
  }

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    OR?: AnnonceScalarWhereWithAggregatesInput[]
    NOT?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annonce"> | number
    titre?: StringWithAggregatesFilter<"Annonce"> | string
    description?: StringWithAggregatesFilter<"Annonce"> | string
    date?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    duree?: StringWithAggregatesFilter<"Annonce"> | string
    utilisateur?: StringWithAggregatesFilter<"Annonce"> | string
    image?: StringWithAggregatesFilter<"Annonce"> | string
    prix?: IntWithAggregatesFilter<"Annonce"> | number
    localisation?: StringWithAggregatesFilter<"Annonce"> | string
    categorie?: StringWithAggregatesFilter<"Annonce"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
  }

  export type AnnonceCreateInput = {
    titre: string
    description: string
    date: Date | string
    duree: string
    utilisateur: string
    image: string
    prix: number
    localisation: string
    categorie: string
    createdAt?: Date | string
  }

  export type AnnonceUncheckedCreateInput = {
    id?: number
    titre: string
    description: string
    date: Date | string
    duree: string
    utilisateur: string
    image: string
    prix: number
    localisation: string
    categorie: string
    createdAt?: Date | string
  }

  export type AnnonceUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duree?: StringFieldUpdateOperationsInput | string
    utilisateur?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    localisation?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duree?: StringFieldUpdateOperationsInput | string
    utilisateur?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    localisation?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceCreateManyInput = {
    id?: number
    titre: string
    description: string
    date: Date | string
    duree: string
    utilisateur: string
    image: string
    prix: number
    localisation: string
    categorie: string
    createdAt?: Date | string
  }

  export type AnnonceUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duree?: StringFieldUpdateOperationsInput | string
    utilisateur?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    localisation?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duree?: StringFieldUpdateOperationsInput | string
    utilisateur?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    localisation?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duree?: SortOrder
    utilisateur?: SortOrder
    image?: SortOrder
    prix?: SortOrder
    localisation?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duree?: SortOrder
    utilisateur?: SortOrder
    image?: SortOrder
    prix?: SortOrder
    localisation?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duree?: SortOrder
    utilisateur?: SortOrder
    image?: SortOrder
    prix?: SortOrder
    localisation?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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