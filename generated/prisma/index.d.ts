
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
 * Model Acao
 * 
 */
export type Acao = $Result.DefaultSelection<Prisma.$AcaoPayload>
/**
 * Model Carteira
 * 
 */
export type Carteira = $Result.DefaultSelection<Prisma.$CarteiraPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Acaos
 * const acaos = await prisma.acao.findMany()
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
   * // Fetch zero or more Acaos
   * const acaos = await prisma.acao.findMany()
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
   * `prisma.acao`: Exposes CRUD operations for the **Acao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acaos
    * const acaos = await prisma.acao.findMany()
    * ```
    */
  get acao(): Prisma.AcaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carteira`: Exposes CRUD operations for the **Carteira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carteiras
    * const carteiras = await prisma.carteira.findMany()
    * ```
    */
  get carteira(): Prisma.CarteiraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Acao: 'Acao',
    Carteira: 'Carteira',
    Usuario: 'Usuario'
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
      modelProps: "acao" | "carteira" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Acao: {
        payload: Prisma.$AcaoPayload<ExtArgs>
        fields: Prisma.AcaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          findFirst: {
            args: Prisma.AcaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          findMany: {
            args: Prisma.AcaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>[]
          }
          create: {
            args: Prisma.AcaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          createMany: {
            args: Prisma.AcaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>[]
          }
          delete: {
            args: Prisma.AcaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          update: {
            args: Prisma.AcaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          deleteMany: {
            args: Prisma.AcaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>[]
          }
          upsert: {
            args: Prisma.AcaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcaoPayload>
          }
          aggregate: {
            args: Prisma.AcaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcao>
          }
          groupBy: {
            args: Prisma.AcaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcaoCountArgs<ExtArgs>
            result: $Utils.Optional<AcaoCountAggregateOutputType> | number
          }
        }
      }
      Carteira: {
        payload: Prisma.$CarteiraPayload<ExtArgs>
        fields: Prisma.CarteiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarteiraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarteiraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          findFirst: {
            args: Prisma.CarteiraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarteiraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          findMany: {
            args: Prisma.CarteiraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>[]
          }
          create: {
            args: Prisma.CarteiraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          createMany: {
            args: Prisma.CarteiraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarteiraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>[]
          }
          delete: {
            args: Prisma.CarteiraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          update: {
            args: Prisma.CarteiraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          deleteMany: {
            args: Prisma.CarteiraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarteiraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarteiraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>[]
          }
          upsert: {
            args: Prisma.CarteiraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarteiraPayload>
          }
          aggregate: {
            args: Prisma.CarteiraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarteira>
          }
          groupBy: {
            args: Prisma.CarteiraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarteiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarteiraCountArgs<ExtArgs>
            result: $Utils.Optional<CarteiraCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    acao?: AcaoOmit
    carteira?: CarteiraOmit
    usuario?: UsuarioOmit
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
   * Count Type AcaoCountOutputType
   */

  export type AcaoCountOutputType = {
    carteiras: number
  }

  export type AcaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carteiras?: boolean | AcaoCountOutputTypeCountCarteirasArgs
  }

  // Custom InputTypes
  /**
   * AcaoCountOutputType without action
   */
  export type AcaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcaoCountOutputType
     */
    select?: AcaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcaoCountOutputType without action
   */
  export type AcaoCountOutputTypeCountCarteirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarteiraWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    carteiras: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carteiras?: boolean | UsuarioCountOutputTypeCountCarteirasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCarteirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarteiraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Acao
   */

  export type AggregateAcao = {
    _count: AcaoCountAggregateOutputType | null
    _avg: AcaoAvgAggregateOutputType | null
    _sum: AcaoSumAggregateOutputType | null
    _min: AcaoMinAggregateOutputType | null
    _max: AcaoMaxAggregateOutputType | null
  }

  export type AcaoAvgAggregateOutputType = {
    id: number | null
  }

  export type AcaoSumAggregateOutputType = {
    id: bigint | null
  }

  export type AcaoMinAggregateOutputType = {
    id: bigint | null
    simbolo: string | null
    nome: string | null
  }

  export type AcaoMaxAggregateOutputType = {
    id: bigint | null
    simbolo: string | null
    nome: string | null
  }

  export type AcaoCountAggregateOutputType = {
    id: number
    simbolo: number
    nome: number
    _all: number
  }


  export type AcaoAvgAggregateInputType = {
    id?: true
  }

  export type AcaoSumAggregateInputType = {
    id?: true
  }

  export type AcaoMinAggregateInputType = {
    id?: true
    simbolo?: true
    nome?: true
  }

  export type AcaoMaxAggregateInputType = {
    id?: true
    simbolo?: true
    nome?: true
  }

  export type AcaoCountAggregateInputType = {
    id?: true
    simbolo?: true
    nome?: true
    _all?: true
  }

  export type AcaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acao to aggregate.
     */
    where?: AcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acaos to fetch.
     */
    orderBy?: AcaoOrderByWithRelationInput | AcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acaos
    **/
    _count?: true | AcaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcaoMaxAggregateInputType
  }

  export type GetAcaoAggregateType<T extends AcaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAcao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcao[P]>
      : GetScalarType<T[P], AggregateAcao[P]>
  }




  export type AcaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcaoWhereInput
    orderBy?: AcaoOrderByWithAggregationInput | AcaoOrderByWithAggregationInput[]
    by: AcaoScalarFieldEnum[] | AcaoScalarFieldEnum
    having?: AcaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcaoCountAggregateInputType | true
    _avg?: AcaoAvgAggregateInputType
    _sum?: AcaoSumAggregateInputType
    _min?: AcaoMinAggregateInputType
    _max?: AcaoMaxAggregateInputType
  }

  export type AcaoGroupByOutputType = {
    id: bigint
    simbolo: string
    nome: string
    _count: AcaoCountAggregateOutputType | null
    _avg: AcaoAvgAggregateOutputType | null
    _sum: AcaoSumAggregateOutputType | null
    _min: AcaoMinAggregateOutputType | null
    _max: AcaoMaxAggregateOutputType | null
  }

  type GetAcaoGroupByPayload<T extends AcaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcaoGroupByOutputType[P]>
            : GetScalarType<T[P], AcaoGroupByOutputType[P]>
        }
      >
    >


  export type AcaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simbolo?: boolean
    nome?: boolean
    carteiras?: boolean | Acao$carteirasArgs<ExtArgs>
    _count?: boolean | AcaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acao"]>

  export type AcaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simbolo?: boolean
    nome?: boolean
  }, ExtArgs["result"]["acao"]>

  export type AcaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simbolo?: boolean
    nome?: boolean
  }, ExtArgs["result"]["acao"]>

  export type AcaoSelectScalar = {
    id?: boolean
    simbolo?: boolean
    nome?: boolean
  }

  export type AcaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simbolo" | "nome", ExtArgs["result"]["acao"]>
  export type AcaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carteiras?: boolean | Acao$carteirasArgs<ExtArgs>
    _count?: boolean | AcaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acao"
    objects: {
      carteiras: Prisma.$CarteiraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      simbolo: string
      nome: string
    }, ExtArgs["result"]["acao"]>
    composites: {}
  }

  type AcaoGetPayload<S extends boolean | null | undefined | AcaoDefaultArgs> = $Result.GetResult<Prisma.$AcaoPayload, S>

  type AcaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcaoCountAggregateInputType | true
    }

  export interface AcaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acao'], meta: { name: 'Acao' } }
    /**
     * Find zero or one Acao that matches the filter.
     * @param {AcaoFindUniqueArgs} args - Arguments to find a Acao
     * @example
     * // Get one Acao
     * const acao = await prisma.acao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcaoFindUniqueArgs>(args: SelectSubset<T, AcaoFindUniqueArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcaoFindUniqueOrThrowArgs} args - Arguments to find a Acao
     * @example
     * // Get one Acao
     * const acao = await prisma.acao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AcaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoFindFirstArgs} args - Arguments to find a Acao
     * @example
     * // Get one Acao
     * const acao = await prisma.acao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcaoFindFirstArgs>(args?: SelectSubset<T, AcaoFindFirstArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoFindFirstOrThrowArgs} args - Arguments to find a Acao
     * @example
     * // Get one Acao
     * const acao = await prisma.acao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AcaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acaos
     * const acaos = await prisma.acao.findMany()
     * 
     * // Get first 10 Acaos
     * const acaos = await prisma.acao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acaoWithIdOnly = await prisma.acao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcaoFindManyArgs>(args?: SelectSubset<T, AcaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acao.
     * @param {AcaoCreateArgs} args - Arguments to create a Acao.
     * @example
     * // Create one Acao
     * const Acao = await prisma.acao.create({
     *   data: {
     *     // ... data to create a Acao
     *   }
     * })
     * 
     */
    create<T extends AcaoCreateArgs>(args: SelectSubset<T, AcaoCreateArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acaos.
     * @param {AcaoCreateManyArgs} args - Arguments to create many Acaos.
     * @example
     * // Create many Acaos
     * const acao = await prisma.acao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcaoCreateManyArgs>(args?: SelectSubset<T, AcaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acaos and returns the data saved in the database.
     * @param {AcaoCreateManyAndReturnArgs} args - Arguments to create many Acaos.
     * @example
     * // Create many Acaos
     * const acao = await prisma.acao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acaos and only return the `id`
     * const acaoWithIdOnly = await prisma.acao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AcaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acao.
     * @param {AcaoDeleteArgs} args - Arguments to delete one Acao.
     * @example
     * // Delete one Acao
     * const Acao = await prisma.acao.delete({
     *   where: {
     *     // ... filter to delete one Acao
     *   }
     * })
     * 
     */
    delete<T extends AcaoDeleteArgs>(args: SelectSubset<T, AcaoDeleteArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acao.
     * @param {AcaoUpdateArgs} args - Arguments to update one Acao.
     * @example
     * // Update one Acao
     * const acao = await prisma.acao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcaoUpdateArgs>(args: SelectSubset<T, AcaoUpdateArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acaos.
     * @param {AcaoDeleteManyArgs} args - Arguments to filter Acaos to delete.
     * @example
     * // Delete a few Acaos
     * const { count } = await prisma.acao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcaoDeleteManyArgs>(args?: SelectSubset<T, AcaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acaos
     * const acao = await prisma.acao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcaoUpdateManyArgs>(args: SelectSubset<T, AcaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acaos and returns the data updated in the database.
     * @param {AcaoUpdateManyAndReturnArgs} args - Arguments to update many Acaos.
     * @example
     * // Update many Acaos
     * const acao = await prisma.acao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acaos and only return the `id`
     * const acaoWithIdOnly = await prisma.acao.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AcaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acao.
     * @param {AcaoUpsertArgs} args - Arguments to update or create a Acao.
     * @example
     * // Update or create a Acao
     * const acao = await prisma.acao.upsert({
     *   create: {
     *     // ... data to create a Acao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acao we want to update
     *   }
     * })
     */
    upsert<T extends AcaoUpsertArgs>(args: SelectSubset<T, AcaoUpsertArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoCountArgs} args - Arguments to filter Acaos to count.
     * @example
     * // Count the number of Acaos
     * const count = await prisma.acao.count({
     *   where: {
     *     // ... the filter for the Acaos we want to count
     *   }
     * })
    **/
    count<T extends AcaoCountArgs>(
      args?: Subset<T, AcaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcaoAggregateArgs>(args: Subset<T, AcaoAggregateArgs>): Prisma.PrismaPromise<GetAcaoAggregateType<T>>

    /**
     * Group by Acao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcaoGroupByArgs} args - Group by arguments.
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
      T extends AcaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcaoGroupByArgs['orderBy'] }
        : { orderBy?: AcaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acao model
   */
  readonly fields: AcaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carteiras<T extends Acao$carteirasArgs<ExtArgs> = {}>(args?: Subset<T, Acao$carteirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Acao model
   */
  interface AcaoFieldRefs {
    readonly id: FieldRef<"Acao", 'BigInt'>
    readonly simbolo: FieldRef<"Acao", 'String'>
    readonly nome: FieldRef<"Acao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Acao findUnique
   */
  export type AcaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter, which Acao to fetch.
     */
    where: AcaoWhereUniqueInput
  }

  /**
   * Acao findUniqueOrThrow
   */
  export type AcaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter, which Acao to fetch.
     */
    where: AcaoWhereUniqueInput
  }

  /**
   * Acao findFirst
   */
  export type AcaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter, which Acao to fetch.
     */
    where?: AcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acaos to fetch.
     */
    orderBy?: AcaoOrderByWithRelationInput | AcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acaos.
     */
    cursor?: AcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acaos.
     */
    distinct?: AcaoScalarFieldEnum | AcaoScalarFieldEnum[]
  }

  /**
   * Acao findFirstOrThrow
   */
  export type AcaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter, which Acao to fetch.
     */
    where?: AcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acaos to fetch.
     */
    orderBy?: AcaoOrderByWithRelationInput | AcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acaos.
     */
    cursor?: AcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acaos.
     */
    distinct?: AcaoScalarFieldEnum | AcaoScalarFieldEnum[]
  }

  /**
   * Acao findMany
   */
  export type AcaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter, which Acaos to fetch.
     */
    where?: AcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acaos to fetch.
     */
    orderBy?: AcaoOrderByWithRelationInput | AcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acaos.
     */
    cursor?: AcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acaos.
     */
    skip?: number
    distinct?: AcaoScalarFieldEnum | AcaoScalarFieldEnum[]
  }

  /**
   * Acao create
   */
  export type AcaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Acao.
     */
    data: XOR<AcaoCreateInput, AcaoUncheckedCreateInput>
  }

  /**
   * Acao createMany
   */
  export type AcaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acaos.
     */
    data: AcaoCreateManyInput | AcaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acao createManyAndReturn
   */
  export type AcaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * The data used to create many Acaos.
     */
    data: AcaoCreateManyInput | AcaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acao update
   */
  export type AcaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Acao.
     */
    data: XOR<AcaoUpdateInput, AcaoUncheckedUpdateInput>
    /**
     * Choose, which Acao to update.
     */
    where: AcaoWhereUniqueInput
  }

  /**
   * Acao updateMany
   */
  export type AcaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acaos.
     */
    data: XOR<AcaoUpdateManyMutationInput, AcaoUncheckedUpdateManyInput>
    /**
     * Filter which Acaos to update
     */
    where?: AcaoWhereInput
    /**
     * Limit how many Acaos to update.
     */
    limit?: number
  }

  /**
   * Acao updateManyAndReturn
   */
  export type AcaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * The data used to update Acaos.
     */
    data: XOR<AcaoUpdateManyMutationInput, AcaoUncheckedUpdateManyInput>
    /**
     * Filter which Acaos to update
     */
    where?: AcaoWhereInput
    /**
     * Limit how many Acaos to update.
     */
    limit?: number
  }

  /**
   * Acao upsert
   */
  export type AcaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Acao to update in case it exists.
     */
    where: AcaoWhereUniqueInput
    /**
     * In case the Acao found by the `where` argument doesn't exist, create a new Acao with this data.
     */
    create: XOR<AcaoCreateInput, AcaoUncheckedCreateInput>
    /**
     * In case the Acao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcaoUpdateInput, AcaoUncheckedUpdateInput>
  }

  /**
   * Acao delete
   */
  export type AcaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    /**
     * Filter which Acao to delete.
     */
    where: AcaoWhereUniqueInput
  }

  /**
   * Acao deleteMany
   */
  export type AcaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acaos to delete
     */
    where?: AcaoWhereInput
    /**
     * Limit how many Acaos to delete.
     */
    limit?: number
  }

  /**
   * Acao.carteiras
   */
  export type Acao$carteirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    where?: CarteiraWhereInput
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    cursor?: CarteiraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarteiraScalarFieldEnum | CarteiraScalarFieldEnum[]
  }

  /**
   * Acao without action
   */
  export type AcaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
  }


  /**
   * Model Carteira
   */

  export type AggregateCarteira = {
    _count: CarteiraCountAggregateOutputType | null
    _avg: CarteiraAvgAggregateOutputType | null
    _sum: CarteiraSumAggregateOutputType | null
    _min: CarteiraMinAggregateOutputType | null
    _max: CarteiraMaxAggregateOutputType | null
  }

  export type CarteiraAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    acaoId: number | null
    quantidade: number | null
    precoMedio: number | null
  }

  export type CarteiraSumAggregateOutputType = {
    id: bigint | null
    usuarioId: bigint | null
    acaoId: bigint | null
    quantidade: number | null
    precoMedio: number | null
  }

  export type CarteiraMinAggregateOutputType = {
    id: bigint | null
    usuarioId: bigint | null
    acaoId: bigint | null
    quantidade: number | null
    precoMedio: number | null
    atualizadoEm: Date | null
  }

  export type CarteiraMaxAggregateOutputType = {
    id: bigint | null
    usuarioId: bigint | null
    acaoId: bigint | null
    quantidade: number | null
    precoMedio: number | null
    atualizadoEm: Date | null
  }

  export type CarteiraCountAggregateOutputType = {
    id: number
    usuarioId: number
    acaoId: number
    quantidade: number
    precoMedio: number
    atualizadoEm: number
    _all: number
  }


  export type CarteiraAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    acaoId?: true
    quantidade?: true
    precoMedio?: true
  }

  export type CarteiraSumAggregateInputType = {
    id?: true
    usuarioId?: true
    acaoId?: true
    quantidade?: true
    precoMedio?: true
  }

  export type CarteiraMinAggregateInputType = {
    id?: true
    usuarioId?: true
    acaoId?: true
    quantidade?: true
    precoMedio?: true
    atualizadoEm?: true
  }

  export type CarteiraMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    acaoId?: true
    quantidade?: true
    precoMedio?: true
    atualizadoEm?: true
  }

  export type CarteiraCountAggregateInputType = {
    id?: true
    usuarioId?: true
    acaoId?: true
    quantidade?: true
    precoMedio?: true
    atualizadoEm?: true
    _all?: true
  }

  export type CarteiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carteira to aggregate.
     */
    where?: CarteiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carteiras to fetch.
     */
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarteiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carteiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carteiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carteiras
    **/
    _count?: true | CarteiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarteiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarteiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarteiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarteiraMaxAggregateInputType
  }

  export type GetCarteiraAggregateType<T extends CarteiraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarteira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarteira[P]>
      : GetScalarType<T[P], AggregateCarteira[P]>
  }




  export type CarteiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarteiraWhereInput
    orderBy?: CarteiraOrderByWithAggregationInput | CarteiraOrderByWithAggregationInput[]
    by: CarteiraScalarFieldEnum[] | CarteiraScalarFieldEnum
    having?: CarteiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarteiraCountAggregateInputType | true
    _avg?: CarteiraAvgAggregateInputType
    _sum?: CarteiraSumAggregateInputType
    _min?: CarteiraMinAggregateInputType
    _max?: CarteiraMaxAggregateInputType
  }

  export type CarteiraGroupByOutputType = {
    id: bigint
    usuarioId: bigint | null
    acaoId: bigint | null
    quantidade: number
    precoMedio: number
    atualizadoEm: Date | null
    _count: CarteiraCountAggregateOutputType | null
    _avg: CarteiraAvgAggregateOutputType | null
    _sum: CarteiraSumAggregateOutputType | null
    _min: CarteiraMinAggregateOutputType | null
    _max: CarteiraMaxAggregateOutputType | null
  }

  type GetCarteiraGroupByPayload<T extends CarteiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarteiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarteiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarteiraGroupByOutputType[P]>
            : GetScalarType<T[P], CarteiraGroupByOutputType[P]>
        }
      >
    >


  export type CarteiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    acaoId?: boolean
    quantidade?: boolean
    precoMedio?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }, ExtArgs["result"]["carteira"]>

  export type CarteiraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    acaoId?: boolean
    quantidade?: boolean
    precoMedio?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }, ExtArgs["result"]["carteira"]>

  export type CarteiraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    acaoId?: boolean
    quantidade?: boolean
    precoMedio?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }, ExtArgs["result"]["carteira"]>

  export type CarteiraSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    acaoId?: boolean
    quantidade?: boolean
    precoMedio?: boolean
    atualizadoEm?: boolean
  }

  export type CarteiraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "acaoId" | "quantidade" | "precoMedio" | "atualizadoEm", ExtArgs["result"]["carteira"]>
  export type CarteiraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }
  export type CarteiraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }
  export type CarteiraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Carteira$usuarioArgs<ExtArgs>
    acao?: boolean | Carteira$acaoArgs<ExtArgs>
  }

  export type $CarteiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carteira"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      acao: Prisma.$AcaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      usuarioId: bigint | null
      acaoId: bigint | null
      quantidade: number
      precoMedio: number
      atualizadoEm: Date | null
    }, ExtArgs["result"]["carteira"]>
    composites: {}
  }

  type CarteiraGetPayload<S extends boolean | null | undefined | CarteiraDefaultArgs> = $Result.GetResult<Prisma.$CarteiraPayload, S>

  type CarteiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarteiraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarteiraCountAggregateInputType | true
    }

  export interface CarteiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carteira'], meta: { name: 'Carteira' } }
    /**
     * Find zero or one Carteira that matches the filter.
     * @param {CarteiraFindUniqueArgs} args - Arguments to find a Carteira
     * @example
     * // Get one Carteira
     * const carteira = await prisma.carteira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarteiraFindUniqueArgs>(args: SelectSubset<T, CarteiraFindUniqueArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carteira that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarteiraFindUniqueOrThrowArgs} args - Arguments to find a Carteira
     * @example
     * // Get one Carteira
     * const carteira = await prisma.carteira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarteiraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarteiraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carteira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraFindFirstArgs} args - Arguments to find a Carteira
     * @example
     * // Get one Carteira
     * const carteira = await prisma.carteira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarteiraFindFirstArgs>(args?: SelectSubset<T, CarteiraFindFirstArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carteira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraFindFirstOrThrowArgs} args - Arguments to find a Carteira
     * @example
     * // Get one Carteira
     * const carteira = await prisma.carteira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarteiraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarteiraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carteiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carteiras
     * const carteiras = await prisma.carteira.findMany()
     * 
     * // Get first 10 Carteiras
     * const carteiras = await prisma.carteira.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carteiraWithIdOnly = await prisma.carteira.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarteiraFindManyArgs>(args?: SelectSubset<T, CarteiraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carteira.
     * @param {CarteiraCreateArgs} args - Arguments to create a Carteira.
     * @example
     * // Create one Carteira
     * const Carteira = await prisma.carteira.create({
     *   data: {
     *     // ... data to create a Carteira
     *   }
     * })
     * 
     */
    create<T extends CarteiraCreateArgs>(args: SelectSubset<T, CarteiraCreateArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carteiras.
     * @param {CarteiraCreateManyArgs} args - Arguments to create many Carteiras.
     * @example
     * // Create many Carteiras
     * const carteira = await prisma.carteira.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarteiraCreateManyArgs>(args?: SelectSubset<T, CarteiraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carteiras and returns the data saved in the database.
     * @param {CarteiraCreateManyAndReturnArgs} args - Arguments to create many Carteiras.
     * @example
     * // Create many Carteiras
     * const carteira = await prisma.carteira.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carteiras and only return the `id`
     * const carteiraWithIdOnly = await prisma.carteira.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarteiraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarteiraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carteira.
     * @param {CarteiraDeleteArgs} args - Arguments to delete one Carteira.
     * @example
     * // Delete one Carteira
     * const Carteira = await prisma.carteira.delete({
     *   where: {
     *     // ... filter to delete one Carteira
     *   }
     * })
     * 
     */
    delete<T extends CarteiraDeleteArgs>(args: SelectSubset<T, CarteiraDeleteArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carteira.
     * @param {CarteiraUpdateArgs} args - Arguments to update one Carteira.
     * @example
     * // Update one Carteira
     * const carteira = await prisma.carteira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarteiraUpdateArgs>(args: SelectSubset<T, CarteiraUpdateArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carteiras.
     * @param {CarteiraDeleteManyArgs} args - Arguments to filter Carteiras to delete.
     * @example
     * // Delete a few Carteiras
     * const { count } = await prisma.carteira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarteiraDeleteManyArgs>(args?: SelectSubset<T, CarteiraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carteiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carteiras
     * const carteira = await prisma.carteira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarteiraUpdateManyArgs>(args: SelectSubset<T, CarteiraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carteiras and returns the data updated in the database.
     * @param {CarteiraUpdateManyAndReturnArgs} args - Arguments to update many Carteiras.
     * @example
     * // Update many Carteiras
     * const carteira = await prisma.carteira.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carteiras and only return the `id`
     * const carteiraWithIdOnly = await prisma.carteira.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarteiraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarteiraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carteira.
     * @param {CarteiraUpsertArgs} args - Arguments to update or create a Carteira.
     * @example
     * // Update or create a Carteira
     * const carteira = await prisma.carteira.upsert({
     *   create: {
     *     // ... data to create a Carteira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carteira we want to update
     *   }
     * })
     */
    upsert<T extends CarteiraUpsertArgs>(args: SelectSubset<T, CarteiraUpsertArgs<ExtArgs>>): Prisma__CarteiraClient<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carteiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraCountArgs} args - Arguments to filter Carteiras to count.
     * @example
     * // Count the number of Carteiras
     * const count = await prisma.carteira.count({
     *   where: {
     *     // ... the filter for the Carteiras we want to count
     *   }
     * })
    **/
    count<T extends CarteiraCountArgs>(
      args?: Subset<T, CarteiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarteiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carteira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarteiraAggregateArgs>(args: Subset<T, CarteiraAggregateArgs>): Prisma.PrismaPromise<GetCarteiraAggregateType<T>>

    /**
     * Group by Carteira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteiraGroupByArgs} args - Group by arguments.
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
      T extends CarteiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarteiraGroupByArgs['orderBy'] }
        : { orderBy?: CarteiraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarteiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarteiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carteira model
   */
  readonly fields: CarteiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carteira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarteiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Carteira$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Carteira$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acao<T extends Carteira$acaoArgs<ExtArgs> = {}>(args?: Subset<T, Carteira$acaoArgs<ExtArgs>>): Prisma__AcaoClient<$Result.GetResult<Prisma.$AcaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Carteira model
   */
  interface CarteiraFieldRefs {
    readonly id: FieldRef<"Carteira", 'BigInt'>
    readonly usuarioId: FieldRef<"Carteira", 'BigInt'>
    readonly acaoId: FieldRef<"Carteira", 'BigInt'>
    readonly quantidade: FieldRef<"Carteira", 'Int'>
    readonly precoMedio: FieldRef<"Carteira", 'Float'>
    readonly atualizadoEm: FieldRef<"Carteira", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carteira findUnique
   */
  export type CarteiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter, which Carteira to fetch.
     */
    where: CarteiraWhereUniqueInput
  }

  /**
   * Carteira findUniqueOrThrow
   */
  export type CarteiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter, which Carteira to fetch.
     */
    where: CarteiraWhereUniqueInput
  }

  /**
   * Carteira findFirst
   */
  export type CarteiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter, which Carteira to fetch.
     */
    where?: CarteiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carteiras to fetch.
     */
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carteiras.
     */
    cursor?: CarteiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carteiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carteiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carteiras.
     */
    distinct?: CarteiraScalarFieldEnum | CarteiraScalarFieldEnum[]
  }

  /**
   * Carteira findFirstOrThrow
   */
  export type CarteiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter, which Carteira to fetch.
     */
    where?: CarteiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carteiras to fetch.
     */
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carteiras.
     */
    cursor?: CarteiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carteiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carteiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carteiras.
     */
    distinct?: CarteiraScalarFieldEnum | CarteiraScalarFieldEnum[]
  }

  /**
   * Carteira findMany
   */
  export type CarteiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter, which Carteiras to fetch.
     */
    where?: CarteiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carteiras to fetch.
     */
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carteiras.
     */
    cursor?: CarteiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carteiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carteiras.
     */
    skip?: number
    distinct?: CarteiraScalarFieldEnum | CarteiraScalarFieldEnum[]
  }

  /**
   * Carteira create
   */
  export type CarteiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carteira.
     */
    data: XOR<CarteiraCreateInput, CarteiraUncheckedCreateInput>
  }

  /**
   * Carteira createMany
   */
  export type CarteiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carteiras.
     */
    data: CarteiraCreateManyInput | CarteiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carteira createManyAndReturn
   */
  export type CarteiraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * The data used to create many Carteiras.
     */
    data: CarteiraCreateManyInput | CarteiraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carteira update
   */
  export type CarteiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carteira.
     */
    data: XOR<CarteiraUpdateInput, CarteiraUncheckedUpdateInput>
    /**
     * Choose, which Carteira to update.
     */
    where: CarteiraWhereUniqueInput
  }

  /**
   * Carteira updateMany
   */
  export type CarteiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carteiras.
     */
    data: XOR<CarteiraUpdateManyMutationInput, CarteiraUncheckedUpdateManyInput>
    /**
     * Filter which Carteiras to update
     */
    where?: CarteiraWhereInput
    /**
     * Limit how many Carteiras to update.
     */
    limit?: number
  }

  /**
   * Carteira updateManyAndReturn
   */
  export type CarteiraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * The data used to update Carteiras.
     */
    data: XOR<CarteiraUpdateManyMutationInput, CarteiraUncheckedUpdateManyInput>
    /**
     * Filter which Carteiras to update
     */
    where?: CarteiraWhereInput
    /**
     * Limit how many Carteiras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carteira upsert
   */
  export type CarteiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carteira to update in case it exists.
     */
    where: CarteiraWhereUniqueInput
    /**
     * In case the Carteira found by the `where` argument doesn't exist, create a new Carteira with this data.
     */
    create: XOR<CarteiraCreateInput, CarteiraUncheckedCreateInput>
    /**
     * In case the Carteira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarteiraUpdateInput, CarteiraUncheckedUpdateInput>
  }

  /**
   * Carteira delete
   */
  export type CarteiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    /**
     * Filter which Carteira to delete.
     */
    where: CarteiraWhereUniqueInput
  }

  /**
   * Carteira deleteMany
   */
  export type CarteiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carteiras to delete
     */
    where?: CarteiraWhereInput
    /**
     * Limit how many Carteiras to delete.
     */
    limit?: number
  }

  /**
   * Carteira.usuario
   */
  export type Carteira$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Carteira.acao
   */
  export type Carteira$acaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acao
     */
    select?: AcaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acao
     */
    omit?: AcaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcaoInclude<ExtArgs> | null
    where?: AcaoWhereInput
  }

  /**
   * Carteira without action
   */
  export type CarteiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: bigint | null
    nomeCompleto: string | null
    cpf: string | null
    telefone: string | null
    usuario: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: bigint | null
    nomeCompleto: string | null
    cpf: string | null
    telefone: string | null
    usuario: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    cpf: number
    telefone: number
    usuario: number
    email: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    cpf?: true
    telefone?: true
    usuario?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    cpf?: true
    telefone?: true
    usuario?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    cpf?: true
    telefone?: true
    usuario?: true
    email?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: bigint
    nomeCompleto: string
    cpf: string
    telefone: string | null
    usuario: string
    email: string
    senha: string
    criadoEm: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    cpf?: boolean
    telefone?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    carteiras?: boolean | Usuario$carteirasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    cpf?: boolean
    telefone?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    cpf?: boolean
    telefone?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    cpf?: boolean
    telefone?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "cpf" | "telefone" | "usuario" | "email" | "senha" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carteiras?: boolean | Usuario$carteirasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      carteiras: Prisma.$CarteiraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nomeCompleto: string
      cpf: string
      telefone: string | null
      usuario: string
      email: string
      senha: string
      criadoEm: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carteiras<T extends Usuario$carteirasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carteirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarteiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'BigInt'>
    readonly nomeCompleto: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.carteiras
   */
  export type Usuario$carteirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carteira
     */
    select?: CarteiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carteira
     */
    omit?: CarteiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteiraInclude<ExtArgs> | null
    where?: CarteiraWhereInput
    orderBy?: CarteiraOrderByWithRelationInput | CarteiraOrderByWithRelationInput[]
    cursor?: CarteiraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarteiraScalarFieldEnum | CarteiraScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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


  export const AcaoScalarFieldEnum: {
    id: 'id',
    simbolo: 'simbolo',
    nome: 'nome'
  };

  export type AcaoScalarFieldEnum = (typeof AcaoScalarFieldEnum)[keyof typeof AcaoScalarFieldEnum]


  export const CarteiraScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    acaoId: 'acaoId',
    quantidade: 'quantidade',
    precoMedio: 'precoMedio',
    atualizadoEm: 'atualizadoEm'
  };

  export type CarteiraScalarFieldEnum = (typeof CarteiraScalarFieldEnum)[keyof typeof CarteiraScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    cpf: 'cpf',
    telefone: 'telefone',
    usuario: 'usuario',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AcaoWhereInput = {
    AND?: AcaoWhereInput | AcaoWhereInput[]
    OR?: AcaoWhereInput[]
    NOT?: AcaoWhereInput | AcaoWhereInput[]
    id?: BigIntFilter<"Acao"> | bigint | number
    simbolo?: StringFilter<"Acao"> | string
    nome?: StringFilter<"Acao"> | string
    carteiras?: CarteiraListRelationFilter
  }

  export type AcaoOrderByWithRelationInput = {
    id?: SortOrder
    simbolo?: SortOrder
    nome?: SortOrder
    carteiras?: CarteiraOrderByRelationAggregateInput
  }

  export type AcaoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    simbolo?: string
    AND?: AcaoWhereInput | AcaoWhereInput[]
    OR?: AcaoWhereInput[]
    NOT?: AcaoWhereInput | AcaoWhereInput[]
    nome?: StringFilter<"Acao"> | string
    carteiras?: CarteiraListRelationFilter
  }, "id" | "simbolo">

  export type AcaoOrderByWithAggregationInput = {
    id?: SortOrder
    simbolo?: SortOrder
    nome?: SortOrder
    _count?: AcaoCountOrderByAggregateInput
    _avg?: AcaoAvgOrderByAggregateInput
    _max?: AcaoMaxOrderByAggregateInput
    _min?: AcaoMinOrderByAggregateInput
    _sum?: AcaoSumOrderByAggregateInput
  }

  export type AcaoScalarWhereWithAggregatesInput = {
    AND?: AcaoScalarWhereWithAggregatesInput | AcaoScalarWhereWithAggregatesInput[]
    OR?: AcaoScalarWhereWithAggregatesInput[]
    NOT?: AcaoScalarWhereWithAggregatesInput | AcaoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Acao"> | bigint | number
    simbolo?: StringWithAggregatesFilter<"Acao"> | string
    nome?: StringWithAggregatesFilter<"Acao"> | string
  }

  export type CarteiraWhereInput = {
    AND?: CarteiraWhereInput | CarteiraWhereInput[]
    OR?: CarteiraWhereInput[]
    NOT?: CarteiraWhereInput | CarteiraWhereInput[]
    id?: BigIntFilter<"Carteira"> | bigint | number
    usuarioId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    acaoId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    quantidade?: IntFilter<"Carteira"> | number
    precoMedio?: FloatFilter<"Carteira"> | number
    atualizadoEm?: DateTimeNullableFilter<"Carteira"> | Date | string | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    acao?: XOR<AcaoNullableScalarRelationFilter, AcaoWhereInput> | null
  }

  export type CarteiraOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acaoId?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
    atualizadoEm?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    acao?: AcaoOrderByWithRelationInput
  }

  export type CarteiraWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CarteiraWhereInput | CarteiraWhereInput[]
    OR?: CarteiraWhereInput[]
    NOT?: CarteiraWhereInput | CarteiraWhereInput[]
    usuarioId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    acaoId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    quantidade?: IntFilter<"Carteira"> | number
    precoMedio?: FloatFilter<"Carteira"> | number
    atualizadoEm?: DateTimeNullableFilter<"Carteira"> | Date | string | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    acao?: XOR<AcaoNullableScalarRelationFilter, AcaoWhereInput> | null
  }, "id">

  export type CarteiraOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acaoId?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
    atualizadoEm?: SortOrderInput | SortOrder
    _count?: CarteiraCountOrderByAggregateInput
    _avg?: CarteiraAvgOrderByAggregateInput
    _max?: CarteiraMaxOrderByAggregateInput
    _min?: CarteiraMinOrderByAggregateInput
    _sum?: CarteiraSumOrderByAggregateInput
  }

  export type CarteiraScalarWhereWithAggregatesInput = {
    AND?: CarteiraScalarWhereWithAggregatesInput | CarteiraScalarWhereWithAggregatesInput[]
    OR?: CarteiraScalarWhereWithAggregatesInput[]
    NOT?: CarteiraScalarWhereWithAggregatesInput | CarteiraScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Carteira"> | bigint | number
    usuarioId?: BigIntNullableWithAggregatesFilter<"Carteira"> | bigint | number | null
    acaoId?: BigIntNullableWithAggregatesFilter<"Carteira"> | bigint | number | null
    quantidade?: IntWithAggregatesFilter<"Carteira"> | number
    precoMedio?: FloatWithAggregatesFilter<"Carteira"> | number
    atualizadoEm?: DateTimeNullableWithAggregatesFilter<"Carteira"> | Date | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: BigIntFilter<"Usuario"> | bigint | number
    nomeCompleto?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    usuario?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    carteiras?: CarteiraListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrderInput | SortOrder
    carteiras?: CarteiraOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    cpf?: string
    usuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nomeCompleto?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    carteiras?: CarteiraListRelationFilter
  }, "id" | "cpf" | "usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Usuario"> | bigint | number
    nomeCompleto?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    usuario?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type AcaoCreateInput = {
    id?: bigint | number
    simbolo: string
    nome: string
    carteiras?: CarteiraCreateNestedManyWithoutAcaoInput
  }

  export type AcaoUncheckedCreateInput = {
    id?: bigint | number
    simbolo: string
    nome: string
    carteiras?: CarteiraUncheckedCreateNestedManyWithoutAcaoInput
  }

  export type AcaoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    carteiras?: CarteiraUpdateManyWithoutAcaoNestedInput
  }

  export type AcaoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    carteiras?: CarteiraUncheckedUpdateManyWithoutAcaoNestedInput
  }

  export type AcaoCreateManyInput = {
    id?: bigint | number
    simbolo: string
    nome: string
  }

  export type AcaoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AcaoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CarteiraCreateInput = {
    id?: bigint | number
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
    usuario?: UsuarioCreateNestedOneWithoutCarteirasInput
    acao?: AcaoCreateNestedOneWithoutCarteirasInput
  }

  export type CarteiraUncheckedCreateInput = {
    id?: bigint | number
    usuarioId?: bigint | number | null
    acaoId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneWithoutCarteirasNestedInput
    acao?: AcaoUpdateOneWithoutCarteirasNestedInput
  }

  export type CarteiraUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuarioId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    acaoId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarteiraCreateManyInput = {
    id?: bigint | number
    usuarioId?: bigint | number | null
    acaoId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarteiraUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuarioId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    acaoId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioCreateInput = {
    id?: bigint | number
    nomeCompleto: string
    cpf: string
    telefone?: string | null
    usuario: string
    email: string
    senha: string
    criadoEm?: Date | string | null
    carteiras?: CarteiraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: bigint | number
    nomeCompleto: string
    cpf: string
    telefone?: string | null
    usuario: string
    email: string
    senha: string
    criadoEm?: Date | string | null
    carteiras?: CarteiraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carteiras?: CarteiraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carteiras?: CarteiraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: bigint | number
    nomeCompleto: string
    cpf: string
    telefone?: string | null
    usuario: string
    email: string
    senha: string
    criadoEm?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type CarteiraListRelationFilter = {
    every?: CarteiraWhereInput
    some?: CarteiraWhereInput
    none?: CarteiraWhereInput
  }

  export type CarteiraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcaoCountOrderByAggregateInput = {
    id?: SortOrder
    simbolo?: SortOrder
    nome?: SortOrder
  }

  export type AcaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcaoMaxOrderByAggregateInput = {
    id?: SortOrder
    simbolo?: SortOrder
    nome?: SortOrder
  }

  export type AcaoMinOrderByAggregateInput = {
    id?: SortOrder
    simbolo?: SortOrder
    nome?: SortOrder
  }

  export type AcaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type AcaoNullableScalarRelationFilter = {
    is?: AcaoWhereInput | null
    isNot?: AcaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarteiraCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acaoId?: SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CarteiraAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acaoId?: SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
  }

  export type CarteiraMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acaoId?: SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CarteiraMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acaoId?: SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CarteiraSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acaoId?: SortOrder
    quantidade?: SortOrder
    precoMedio?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CarteiraCreateNestedManyWithoutAcaoInput = {
    create?: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput> | CarteiraCreateWithoutAcaoInput[] | CarteiraUncheckedCreateWithoutAcaoInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutAcaoInput | CarteiraCreateOrConnectWithoutAcaoInput[]
    createMany?: CarteiraCreateManyAcaoInputEnvelope
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
  }

  export type CarteiraUncheckedCreateNestedManyWithoutAcaoInput = {
    create?: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput> | CarteiraCreateWithoutAcaoInput[] | CarteiraUncheckedCreateWithoutAcaoInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutAcaoInput | CarteiraCreateOrConnectWithoutAcaoInput[]
    createMany?: CarteiraCreateManyAcaoInputEnvelope
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CarteiraUpdateManyWithoutAcaoNestedInput = {
    create?: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput> | CarteiraCreateWithoutAcaoInput[] | CarteiraUncheckedCreateWithoutAcaoInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutAcaoInput | CarteiraCreateOrConnectWithoutAcaoInput[]
    upsert?: CarteiraUpsertWithWhereUniqueWithoutAcaoInput | CarteiraUpsertWithWhereUniqueWithoutAcaoInput[]
    createMany?: CarteiraCreateManyAcaoInputEnvelope
    set?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    disconnect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    delete?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    update?: CarteiraUpdateWithWhereUniqueWithoutAcaoInput | CarteiraUpdateWithWhereUniqueWithoutAcaoInput[]
    updateMany?: CarteiraUpdateManyWithWhereWithoutAcaoInput | CarteiraUpdateManyWithWhereWithoutAcaoInput[]
    deleteMany?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
  }

  export type CarteiraUncheckedUpdateManyWithoutAcaoNestedInput = {
    create?: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput> | CarteiraCreateWithoutAcaoInput[] | CarteiraUncheckedCreateWithoutAcaoInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutAcaoInput | CarteiraCreateOrConnectWithoutAcaoInput[]
    upsert?: CarteiraUpsertWithWhereUniqueWithoutAcaoInput | CarteiraUpsertWithWhereUniqueWithoutAcaoInput[]
    createMany?: CarteiraCreateManyAcaoInputEnvelope
    set?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    disconnect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    delete?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    update?: CarteiraUpdateWithWhereUniqueWithoutAcaoInput | CarteiraUpdateWithWhereUniqueWithoutAcaoInput[]
    updateMany?: CarteiraUpdateManyWithWhereWithoutAcaoInput | CarteiraUpdateManyWithWhereWithoutAcaoInput[]
    deleteMany?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCarteirasInput = {
    create?: XOR<UsuarioCreateWithoutCarteirasInput, UsuarioUncheckedCreateWithoutCarteirasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarteirasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AcaoCreateNestedOneWithoutCarteirasInput = {
    create?: XOR<AcaoCreateWithoutCarteirasInput, AcaoUncheckedCreateWithoutCarteirasInput>
    connectOrCreate?: AcaoCreateOrConnectWithoutCarteirasInput
    connect?: AcaoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneWithoutCarteirasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarteirasInput, UsuarioUncheckedCreateWithoutCarteirasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarteirasInput
    upsert?: UsuarioUpsertWithoutCarteirasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarteirasInput, UsuarioUpdateWithoutCarteirasInput>, UsuarioUncheckedUpdateWithoutCarteirasInput>
  }

  export type AcaoUpdateOneWithoutCarteirasNestedInput = {
    create?: XOR<AcaoCreateWithoutCarteirasInput, AcaoUncheckedCreateWithoutCarteirasInput>
    connectOrCreate?: AcaoCreateOrConnectWithoutCarteirasInput
    upsert?: AcaoUpsertWithoutCarteirasInput
    disconnect?: AcaoWhereInput | boolean
    delete?: AcaoWhereInput | boolean
    connect?: AcaoWhereUniqueInput
    update?: XOR<XOR<AcaoUpdateToOneWithWhereWithoutCarteirasInput, AcaoUpdateWithoutCarteirasInput>, AcaoUncheckedUpdateWithoutCarteirasInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CarteiraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput> | CarteiraCreateWithoutUsuarioInput[] | CarteiraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutUsuarioInput | CarteiraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CarteiraCreateManyUsuarioInputEnvelope
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
  }

  export type CarteiraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput> | CarteiraCreateWithoutUsuarioInput[] | CarteiraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutUsuarioInput | CarteiraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CarteiraCreateManyUsuarioInputEnvelope
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarteiraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput> | CarteiraCreateWithoutUsuarioInput[] | CarteiraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutUsuarioInput | CarteiraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CarteiraUpsertWithWhereUniqueWithoutUsuarioInput | CarteiraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CarteiraCreateManyUsuarioInputEnvelope
    set?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    disconnect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    delete?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    update?: CarteiraUpdateWithWhereUniqueWithoutUsuarioInput | CarteiraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CarteiraUpdateManyWithWhereWithoutUsuarioInput | CarteiraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
  }

  export type CarteiraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput> | CarteiraCreateWithoutUsuarioInput[] | CarteiraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CarteiraCreateOrConnectWithoutUsuarioInput | CarteiraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CarteiraUpsertWithWhereUniqueWithoutUsuarioInput | CarteiraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CarteiraCreateManyUsuarioInputEnvelope
    set?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    disconnect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    delete?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    connect?: CarteiraWhereUniqueInput | CarteiraWhereUniqueInput[]
    update?: CarteiraUpdateWithWhereUniqueWithoutUsuarioInput | CarteiraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CarteiraUpdateManyWithWhereWithoutUsuarioInput | CarteiraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CarteiraCreateWithoutAcaoInput = {
    id?: bigint | number
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
    usuario?: UsuarioCreateNestedOneWithoutCarteirasInput
  }

  export type CarteiraUncheckedCreateWithoutAcaoInput = {
    id?: bigint | number
    usuarioId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraCreateOrConnectWithoutAcaoInput = {
    where: CarteiraWhereUniqueInput
    create: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput>
  }

  export type CarteiraCreateManyAcaoInputEnvelope = {
    data: CarteiraCreateManyAcaoInput | CarteiraCreateManyAcaoInput[]
    skipDuplicates?: boolean
  }

  export type CarteiraUpsertWithWhereUniqueWithoutAcaoInput = {
    where: CarteiraWhereUniqueInput
    update: XOR<CarteiraUpdateWithoutAcaoInput, CarteiraUncheckedUpdateWithoutAcaoInput>
    create: XOR<CarteiraCreateWithoutAcaoInput, CarteiraUncheckedCreateWithoutAcaoInput>
  }

  export type CarteiraUpdateWithWhereUniqueWithoutAcaoInput = {
    where: CarteiraWhereUniqueInput
    data: XOR<CarteiraUpdateWithoutAcaoInput, CarteiraUncheckedUpdateWithoutAcaoInput>
  }

  export type CarteiraUpdateManyWithWhereWithoutAcaoInput = {
    where: CarteiraScalarWhereInput
    data: XOR<CarteiraUpdateManyMutationInput, CarteiraUncheckedUpdateManyWithoutAcaoInput>
  }

  export type CarteiraScalarWhereInput = {
    AND?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
    OR?: CarteiraScalarWhereInput[]
    NOT?: CarteiraScalarWhereInput | CarteiraScalarWhereInput[]
    id?: BigIntFilter<"Carteira"> | bigint | number
    usuarioId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    acaoId?: BigIntNullableFilter<"Carteira"> | bigint | number | null
    quantidade?: IntFilter<"Carteira"> | number
    precoMedio?: FloatFilter<"Carteira"> | number
    atualizadoEm?: DateTimeNullableFilter<"Carteira"> | Date | string | null
  }

  export type UsuarioCreateWithoutCarteirasInput = {
    id?: bigint | number
    nomeCompleto: string
    cpf: string
    telefone?: string | null
    usuario: string
    email: string
    senha: string
    criadoEm?: Date | string | null
  }

  export type UsuarioUncheckedCreateWithoutCarteirasInput = {
    id?: bigint | number
    nomeCompleto: string
    cpf: string
    telefone?: string | null
    usuario: string
    email: string
    senha: string
    criadoEm?: Date | string | null
  }

  export type UsuarioCreateOrConnectWithoutCarteirasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarteirasInput, UsuarioUncheckedCreateWithoutCarteirasInput>
  }

  export type AcaoCreateWithoutCarteirasInput = {
    id?: bigint | number
    simbolo: string
    nome: string
  }

  export type AcaoUncheckedCreateWithoutCarteirasInput = {
    id?: bigint | number
    simbolo: string
    nome: string
  }

  export type AcaoCreateOrConnectWithoutCarteirasInput = {
    where: AcaoWhereUniqueInput
    create: XOR<AcaoCreateWithoutCarteirasInput, AcaoUncheckedCreateWithoutCarteirasInput>
  }

  export type UsuarioUpsertWithoutCarteirasInput = {
    update: XOR<UsuarioUpdateWithoutCarteirasInput, UsuarioUncheckedUpdateWithoutCarteirasInput>
    create: XOR<UsuarioCreateWithoutCarteirasInput, UsuarioUncheckedCreateWithoutCarteirasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarteirasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarteirasInput, UsuarioUncheckedUpdateWithoutCarteirasInput>
  }

  export type UsuarioUpdateWithoutCarteirasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateWithoutCarteirasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcaoUpsertWithoutCarteirasInput = {
    update: XOR<AcaoUpdateWithoutCarteirasInput, AcaoUncheckedUpdateWithoutCarteirasInput>
    create: XOR<AcaoCreateWithoutCarteirasInput, AcaoUncheckedCreateWithoutCarteirasInput>
    where?: AcaoWhereInput
  }

  export type AcaoUpdateToOneWithWhereWithoutCarteirasInput = {
    where?: AcaoWhereInput
    data: XOR<AcaoUpdateWithoutCarteirasInput, AcaoUncheckedUpdateWithoutCarteirasInput>
  }

  export type AcaoUpdateWithoutCarteirasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AcaoUncheckedUpdateWithoutCarteirasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    simbolo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CarteiraCreateWithoutUsuarioInput = {
    id?: bigint | number
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
    acao?: AcaoCreateNestedOneWithoutCarteirasInput
  }

  export type CarteiraUncheckedCreateWithoutUsuarioInput = {
    id?: bigint | number
    acaoId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraCreateOrConnectWithoutUsuarioInput = {
    where: CarteiraWhereUniqueInput
    create: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput>
  }

  export type CarteiraCreateManyUsuarioInputEnvelope = {
    data: CarteiraCreateManyUsuarioInput | CarteiraCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CarteiraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CarteiraWhereUniqueInput
    update: XOR<CarteiraUpdateWithoutUsuarioInput, CarteiraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CarteiraCreateWithoutUsuarioInput, CarteiraUncheckedCreateWithoutUsuarioInput>
  }

  export type CarteiraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CarteiraWhereUniqueInput
    data: XOR<CarteiraUpdateWithoutUsuarioInput, CarteiraUncheckedUpdateWithoutUsuarioInput>
  }

  export type CarteiraUpdateManyWithWhereWithoutUsuarioInput = {
    where: CarteiraScalarWhereInput
    data: XOR<CarteiraUpdateManyMutationInput, CarteiraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CarteiraCreateManyAcaoInput = {
    id?: bigint | number
    usuarioId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraUpdateWithoutAcaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneWithoutCarteirasNestedInput
  }

  export type CarteiraUncheckedUpdateWithoutAcaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuarioId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarteiraUncheckedUpdateManyWithoutAcaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuarioId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarteiraCreateManyUsuarioInput = {
    id?: bigint | number
    acaoId?: bigint | number | null
    quantidade: number
    precoMedio: number
    atualizadoEm?: Date | string | null
  }

  export type CarteiraUpdateWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acao?: AcaoUpdateOneWithoutCarteirasNestedInput
  }

  export type CarteiraUncheckedUpdateWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acaoId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarteiraUncheckedUpdateManyWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acaoId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoMedio?: FloatFieldUpdateOperationsInput | number
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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