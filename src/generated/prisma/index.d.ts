
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
 * Model Line
 * 
 */
export type Line = $Result.DefaultSelection<Prisma.$LinePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model LostItem
 * 
 */
export type LostItem = $Result.DefaultSelection<Prisma.$LostItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  STORED: 'STORED',
  RETURNED: 'RETURNED',
  DISCARDED: 'DISCARDED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lines
 * const lines = await prisma.line.findMany()
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
   * // Fetch zero or more Lines
   * const lines = await prisma.line.findMany()
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
   * `prisma.line`: Exposes CRUD operations for the **Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lines
    * const lines = await prisma.line.findMany()
    * ```
    */
  get line(): Prisma.LineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lostItem`: Exposes CRUD operations for the **LostItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LostItems
    * const lostItems = await prisma.lostItem.findMany()
    * ```
    */
  get lostItem(): Prisma.LostItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Line: 'Line',
    Category: 'Category',
    LostItem: 'LostItem'
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
      modelProps: "line" | "category" | "lostItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Line: {
        payload: Prisma.$LinePayload<ExtArgs>
        fields: Prisma.LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findFirst: {
            args: Prisma.LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findMany: {
            args: Prisma.LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          create: {
            args: Prisma.LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          createMany: {
            args: Prisma.LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          delete: {
            args: Prisma.LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          update: {
            args: Prisma.LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          deleteMany: {
            args: Prisma.LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          upsert: {
            args: Prisma.LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          aggregate: {
            args: Prisma.LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLine>
          }
          groupBy: {
            args: Prisma.LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineCountArgs<ExtArgs>
            result: $Utils.Optional<LineCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      LostItem: {
        payload: Prisma.$LostItemPayload<ExtArgs>
        fields: Prisma.LostItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LostItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LostItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          findFirst: {
            args: Prisma.LostItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LostItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          findMany: {
            args: Prisma.LostItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>[]
          }
          create: {
            args: Prisma.LostItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          createMany: {
            args: Prisma.LostItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LostItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>[]
          }
          delete: {
            args: Prisma.LostItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          update: {
            args: Prisma.LostItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          deleteMany: {
            args: Prisma.LostItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LostItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LostItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>[]
          }
          upsert: {
            args: Prisma.LostItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          aggregate: {
            args: Prisma.LostItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLostItem>
          }
          groupBy: {
            args: Prisma.LostItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LostItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LostItemCountArgs<ExtArgs>
            result: $Utils.Optional<LostItemCountAggregateOutputType> | number
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
    line?: LineOmit
    category?: CategoryOmit
    lostItem?: LostItemOmit
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
   * Count Type LineCountOutputType
   */

  export type LineCountOutputType = {
    lostItems: number
  }

  export type LineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | LineCountOutputTypeCountLostItemsArgs
  }

  // Custom InputTypes
  /**
   * LineCountOutputType without action
   */
  export type LineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineCountOutputType
     */
    select?: LineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LineCountOutputType without action
   */
  export type LineCountOutputTypeCountLostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    lostItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | CategoryCountOutputTypeCountLostItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountLostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Line
   */

  export type AggregateLine = {
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  export type LineAvgAggregateOutputType = {
    id: number | null
  }

  export type LineSumAggregateOutputType = {
    id: number | null
  }

  export type LineMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LineMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LineCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LineAvgAggregateInputType = {
    id?: true
  }

  export type LineSumAggregateInputType = {
    id?: true
  }

  export type LineMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LineMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LineCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType
  }

  export type GetLineAggregateType<T extends LineAggregateArgs> = {
        [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLine[P]>
      : GetScalarType<T[P], AggregateLine[P]>
  }




  export type LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
    orderBy?: LineOrderByWithAggregationInput | LineOrderByWithAggregationInput[]
    by: LineScalarFieldEnum[] | LineScalarFieldEnum
    having?: LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineCountAggregateInputType | true
    _avg?: LineAvgAggregateInputType
    _sum?: LineSumAggregateInputType
    _min?: LineMinAggregateInputType
    _max?: LineMaxAggregateInputType
  }

  export type LineGroupByOutputType = {
    id: number
    name: string
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineGroupByOutputType[P]>
            : GetScalarType<T[P], LineGroupByOutputType[P]>
        }
      >
    >


  export type LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lostItems?: boolean | Line$lostItemsArgs<ExtArgs>
    _count?: boolean | LineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["line"]>

  export type LineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["line"]>

  export type LineSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["line"]>
  export type LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | Line$lostItemsArgs<ExtArgs>
    _count?: boolean | LineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Line"
    objects: {
      lostItems: Prisma.$LostItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["line"]>
    composites: {}
  }

  type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = $Result.GetResult<Prisma.$LinePayload, S>

  type LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineCountAggregateInputType | true
    }

  export interface LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Line'], meta: { name: 'Line' } }
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     * 
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineWithIdOnly = await prisma.line.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineFindManyArgs>(args?: SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     * 
     */
    create<T extends LineCreateArgs>(args: SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineCreateManyArgs>(args?: SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lines and returns the data saved in the database.
     * @param {LineCreateManyAndReturnArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineCreateManyAndReturnArgs>(args?: SelectSubset<T, LineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     * 
     */
    delete<T extends LineDeleteArgs>(args: SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineUpdateArgs>(args: SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineUpdateManyArgs>(args: SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines and returns the data updated in the database.
     * @param {LineUpdateManyAndReturnArgs} args - Arguments to update many Lines.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.updateManyAndReturn({
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
    updateManyAndReturn<T extends LineUpdateManyAndReturnArgs>(args: SelectSubset<T, LineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(
      args?: Subset<T, LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineAggregateArgs>(args: Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>

    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
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
      T extends LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineGroupByArgs['orderBy'] }
        : { orderBy?: LineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Line model
   */
  readonly fields: LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lostItems<T extends Line$lostItemsArgs<ExtArgs> = {}>(args?: Subset<T, Line$lostItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Line model
   */
  interface LineFieldRefs {
    readonly id: FieldRef<"Line", 'Int'>
    readonly name: FieldRef<"Line", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Line findUnique
   */
  export type LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findUniqueOrThrow
   */
  export type LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findFirst
   */
  export type LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findFirstOrThrow
   */
  export type LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findMany
   */
  export type LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Lines to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line create
   */
  export type LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Line.
     */
    data: XOR<LineCreateInput, LineUncheckedCreateInput>
  }

  /**
   * Line createMany
   */
  export type LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
  }

  /**
   * Line createManyAndReturn
   */
  export type LineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
  }

  /**
   * Line update
   */
  export type LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Line.
     */
    data: XOR<LineUpdateInput, LineUncheckedUpdateInput>
    /**
     * Choose, which Line to update.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line updateMany
   */
  export type LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
  }

  /**
   * Line updateManyAndReturn
   */
  export type LineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
  }

  /**
   * Line upsert
   */
  export type LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: LineWhereUniqueInput
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: XOR<LineCreateInput, LineUncheckedCreateInput>
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUpdateInput, LineUncheckedUpdateInput>
  }

  /**
   * Line delete
   */
  export type LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter which Line to delete.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line deleteMany
   */
  export type LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to delete.
     */
    limit?: number
  }

  /**
   * Line.lostItems
   */
  export type Line$lostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    where?: LostItemWhereInput
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    cursor?: LostItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * Line without action
   */
  export type LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lostItems?: boolean | Category$lostItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | Category$lostItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      lostItems: Prisma.$LostItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lostItems<T extends Category$lostItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$lostItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.lostItems
   */
  export type Category$lostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    where?: LostItemWhereInput
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    cursor?: LostItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model LostItem
   */

  export type AggregateLostItem = {
    _count: LostItemCountAggregateOutputType | null
    _avg: LostItemAvgAggregateOutputType | null
    _sum: LostItemSumAggregateOutputType | null
    _min: LostItemMinAggregateOutputType | null
    _max: LostItemMaxAggregateOutputType | null
  }

  export type LostItemAvgAggregateOutputType = {
    id: number | null
    lineId: number | null
    categoryId: number | null
  }

  export type LostItemSumAggregateOutputType = {
    id: number | null
    lineId: number | null
    categoryId: number | null
  }

  export type LostItemMinAggregateOutputType = {
    id: number | null
    lineId: number | null
    categoryId: number | null
    itemName: string | null
    status: $Enums.Status | null
    imageUrl: string | null
    notes: string | null
  }

  export type LostItemMaxAggregateOutputType = {
    id: number | null
    lineId: number | null
    categoryId: number | null
    itemName: string | null
    status: $Enums.Status | null
    imageUrl: string | null
    notes: string | null
  }

  export type LostItemCountAggregateOutputType = {
    id: number
    lineId: number
    categoryId: number
    itemName: number
    status: number
    imageUrl: number
    notes: number
    _all: number
  }


  export type LostItemAvgAggregateInputType = {
    id?: true
    lineId?: true
    categoryId?: true
  }

  export type LostItemSumAggregateInputType = {
    id?: true
    lineId?: true
    categoryId?: true
  }

  export type LostItemMinAggregateInputType = {
    id?: true
    lineId?: true
    categoryId?: true
    itemName?: true
    status?: true
    imageUrl?: true
    notes?: true
  }

  export type LostItemMaxAggregateInputType = {
    id?: true
    lineId?: true
    categoryId?: true
    itemName?: true
    status?: true
    imageUrl?: true
    notes?: true
  }

  export type LostItemCountAggregateInputType = {
    id?: true
    lineId?: true
    categoryId?: true
    itemName?: true
    status?: true
    imageUrl?: true
    notes?: true
    _all?: true
  }

  export type LostItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostItem to aggregate.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LostItems
    **/
    _count?: true | LostItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LostItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LostItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LostItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LostItemMaxAggregateInputType
  }

  export type GetLostItemAggregateType<T extends LostItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLostItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLostItem[P]>
      : GetScalarType<T[P], AggregateLostItem[P]>
  }




  export type LostItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostItemWhereInput
    orderBy?: LostItemOrderByWithAggregationInput | LostItemOrderByWithAggregationInput[]
    by: LostItemScalarFieldEnum[] | LostItemScalarFieldEnum
    having?: LostItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LostItemCountAggregateInputType | true
    _avg?: LostItemAvgAggregateInputType
    _sum?: LostItemSumAggregateInputType
    _min?: LostItemMinAggregateInputType
    _max?: LostItemMaxAggregateInputType
  }

  export type LostItemGroupByOutputType = {
    id: number
    lineId: number
    categoryId: number
    itemName: string
    status: $Enums.Status
    imageUrl: string | null
    notes: string | null
    _count: LostItemCountAggregateOutputType | null
    _avg: LostItemAvgAggregateOutputType | null
    _sum: LostItemSumAggregateOutputType | null
    _min: LostItemMinAggregateOutputType | null
    _max: LostItemMaxAggregateOutputType | null
  }

  type GetLostItemGroupByPayload<T extends LostItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LostItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LostItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LostItemGroupByOutputType[P]>
            : GetScalarType<T[P], LostItemGroupByOutputType[P]>
        }
      >
    >


  export type LostItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineId?: boolean
    categoryId?: boolean
    itemName?: boolean
    status?: boolean
    imageUrl?: boolean
    notes?: boolean
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostItem"]>

  export type LostItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineId?: boolean
    categoryId?: boolean
    itemName?: boolean
    status?: boolean
    imageUrl?: boolean
    notes?: boolean
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostItem"]>

  export type LostItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineId?: boolean
    categoryId?: boolean
    itemName?: boolean
    status?: boolean
    imageUrl?: boolean
    notes?: boolean
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostItem"]>

  export type LostItemSelectScalar = {
    id?: boolean
    lineId?: boolean
    categoryId?: boolean
    itemName?: boolean
    status?: boolean
    imageUrl?: boolean
    notes?: boolean
  }

  export type LostItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lineId" | "categoryId" | "itemName" | "status" | "imageUrl" | "notes", ExtArgs["result"]["lostItem"]>
  export type LostItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type LostItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type LostItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line?: boolean | LineDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $LostItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LostItem"
    objects: {
      line: Prisma.$LinePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lineId: number
      categoryId: number
      itemName: string
      status: $Enums.Status
      imageUrl: string | null
      notes: string | null
    }, ExtArgs["result"]["lostItem"]>
    composites: {}
  }

  type LostItemGetPayload<S extends boolean | null | undefined | LostItemDefaultArgs> = $Result.GetResult<Prisma.$LostItemPayload, S>

  type LostItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LostItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LostItemCountAggregateInputType | true
    }

  export interface LostItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LostItem'], meta: { name: 'LostItem' } }
    /**
     * Find zero or one LostItem that matches the filter.
     * @param {LostItemFindUniqueArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LostItemFindUniqueArgs>(args: SelectSubset<T, LostItemFindUniqueArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LostItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LostItemFindUniqueOrThrowArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LostItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LostItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindFirstArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LostItemFindFirstArgs>(args?: SelectSubset<T, LostItemFindFirstArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindFirstOrThrowArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LostItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LostItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LostItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LostItems
     * const lostItems = await prisma.lostItem.findMany()
     * 
     * // Get first 10 LostItems
     * const lostItems = await prisma.lostItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lostItemWithIdOnly = await prisma.lostItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LostItemFindManyArgs>(args?: SelectSubset<T, LostItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LostItem.
     * @param {LostItemCreateArgs} args - Arguments to create a LostItem.
     * @example
     * // Create one LostItem
     * const LostItem = await prisma.lostItem.create({
     *   data: {
     *     // ... data to create a LostItem
     *   }
     * })
     * 
     */
    create<T extends LostItemCreateArgs>(args: SelectSubset<T, LostItemCreateArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LostItems.
     * @param {LostItemCreateManyArgs} args - Arguments to create many LostItems.
     * @example
     * // Create many LostItems
     * const lostItem = await prisma.lostItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LostItemCreateManyArgs>(args?: SelectSubset<T, LostItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LostItems and returns the data saved in the database.
     * @param {LostItemCreateManyAndReturnArgs} args - Arguments to create many LostItems.
     * @example
     * // Create many LostItems
     * const lostItem = await prisma.lostItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LostItems and only return the `id`
     * const lostItemWithIdOnly = await prisma.lostItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LostItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LostItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LostItem.
     * @param {LostItemDeleteArgs} args - Arguments to delete one LostItem.
     * @example
     * // Delete one LostItem
     * const LostItem = await prisma.lostItem.delete({
     *   where: {
     *     // ... filter to delete one LostItem
     *   }
     * })
     * 
     */
    delete<T extends LostItemDeleteArgs>(args: SelectSubset<T, LostItemDeleteArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LostItem.
     * @param {LostItemUpdateArgs} args - Arguments to update one LostItem.
     * @example
     * // Update one LostItem
     * const lostItem = await prisma.lostItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LostItemUpdateArgs>(args: SelectSubset<T, LostItemUpdateArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LostItems.
     * @param {LostItemDeleteManyArgs} args - Arguments to filter LostItems to delete.
     * @example
     * // Delete a few LostItems
     * const { count } = await prisma.lostItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LostItemDeleteManyArgs>(args?: SelectSubset<T, LostItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LostItems
     * const lostItem = await prisma.lostItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LostItemUpdateManyArgs>(args: SelectSubset<T, LostItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostItems and returns the data updated in the database.
     * @param {LostItemUpdateManyAndReturnArgs} args - Arguments to update many LostItems.
     * @example
     * // Update many LostItems
     * const lostItem = await prisma.lostItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LostItems and only return the `id`
     * const lostItemWithIdOnly = await prisma.lostItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LostItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LostItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LostItem.
     * @param {LostItemUpsertArgs} args - Arguments to update or create a LostItem.
     * @example
     * // Update or create a LostItem
     * const lostItem = await prisma.lostItem.upsert({
     *   create: {
     *     // ... data to create a LostItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LostItem we want to update
     *   }
     * })
     */
    upsert<T extends LostItemUpsertArgs>(args: SelectSubset<T, LostItemUpsertArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LostItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemCountArgs} args - Arguments to filter LostItems to count.
     * @example
     * // Count the number of LostItems
     * const count = await prisma.lostItem.count({
     *   where: {
     *     // ... the filter for the LostItems we want to count
     *   }
     * })
    **/
    count<T extends LostItemCountArgs>(
      args?: Subset<T, LostItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LostItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LostItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LostItemAggregateArgs>(args: Subset<T, LostItemAggregateArgs>): Prisma.PrismaPromise<GetLostItemAggregateType<T>>

    /**
     * Group by LostItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemGroupByArgs} args - Group by arguments.
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
      T extends LostItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LostItemGroupByArgs['orderBy'] }
        : { orderBy?: LostItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LostItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLostItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LostItem model
   */
  readonly fields: LostItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LostItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LostItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    line<T extends LineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LineDefaultArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LostItem model
   */
  interface LostItemFieldRefs {
    readonly id: FieldRef<"LostItem", 'Int'>
    readonly lineId: FieldRef<"LostItem", 'Int'>
    readonly categoryId: FieldRef<"LostItem", 'Int'>
    readonly itemName: FieldRef<"LostItem", 'String'>
    readonly status: FieldRef<"LostItem", 'Status'>
    readonly imageUrl: FieldRef<"LostItem", 'String'>
    readonly notes: FieldRef<"LostItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LostItem findUnique
   */
  export type LostItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem findUniqueOrThrow
   */
  export type LostItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem findFirst
   */
  export type LostItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostItems.
     */
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem findFirstOrThrow
   */
  export type LostItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostItems.
     */
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem findMany
   */
  export type LostItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItems to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem create
   */
  export type LostItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LostItem.
     */
    data: XOR<LostItemCreateInput, LostItemUncheckedCreateInput>
  }

  /**
   * LostItem createMany
   */
  export type LostItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LostItems.
     */
    data: LostItemCreateManyInput | LostItemCreateManyInput[]
  }

  /**
   * LostItem createManyAndReturn
   */
  export type LostItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * The data used to create many LostItems.
     */
    data: LostItemCreateManyInput | LostItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LostItem update
   */
  export type LostItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LostItem.
     */
    data: XOR<LostItemUpdateInput, LostItemUncheckedUpdateInput>
    /**
     * Choose, which LostItem to update.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem updateMany
   */
  export type LostItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LostItems.
     */
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyInput>
    /**
     * Filter which LostItems to update
     */
    where?: LostItemWhereInput
    /**
     * Limit how many LostItems to update.
     */
    limit?: number
  }

  /**
   * LostItem updateManyAndReturn
   */
  export type LostItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * The data used to update LostItems.
     */
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyInput>
    /**
     * Filter which LostItems to update
     */
    where?: LostItemWhereInput
    /**
     * Limit how many LostItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LostItem upsert
   */
  export type LostItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LostItem to update in case it exists.
     */
    where: LostItemWhereUniqueInput
    /**
     * In case the LostItem found by the `where` argument doesn't exist, create a new LostItem with this data.
     */
    create: XOR<LostItemCreateInput, LostItemUncheckedCreateInput>
    /**
     * In case the LostItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LostItemUpdateInput, LostItemUncheckedUpdateInput>
  }

  /**
   * LostItem delete
   */
  export type LostItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter which LostItem to delete.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem deleteMany
   */
  export type LostItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostItems to delete
     */
    where?: LostItemWhereInput
    /**
     * Limit how many LostItems to delete.
     */
    limit?: number
  }

  /**
   * LostItem without action
   */
  export type LostItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostItem
     */
    omit?: LostItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LineScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const LostItemScalarFieldEnum: {
    id: 'id',
    lineId: 'lineId',
    categoryId: 'categoryId',
    itemName: 'itemName',
    status: 'status',
    imageUrl: 'imageUrl',
    notes: 'notes'
  };

  export type LostItemScalarFieldEnum = (typeof LostItemScalarFieldEnum)[keyof typeof LostItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LineWhereInput = {
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    id?: IntFilter<"Line"> | number
    name?: StringFilter<"Line"> | string
    lostItems?: LostItemListRelationFilter
  }

  export type LineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lostItems?: LostItemOrderByRelationAggregateInput
  }

  export type LineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    lostItems?: LostItemListRelationFilter
  }, "id" | "name">

  export type LineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LineCountOrderByAggregateInput
    _avg?: LineAvgOrderByAggregateInput
    _max?: LineMaxOrderByAggregateInput
    _min?: LineMinOrderByAggregateInput
    _sum?: LineSumOrderByAggregateInput
  }

  export type LineScalarWhereWithAggregatesInput = {
    AND?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    OR?: LineScalarWhereWithAggregatesInput[]
    NOT?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Line"> | number
    name?: StringWithAggregatesFilter<"Line"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    lostItems?: LostItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lostItems?: LostItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    lostItems?: LostItemListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type LostItemWhereInput = {
    AND?: LostItemWhereInput | LostItemWhereInput[]
    OR?: LostItemWhereInput[]
    NOT?: LostItemWhereInput | LostItemWhereInput[]
    id?: IntFilter<"LostItem"> | number
    lineId?: IntFilter<"LostItem"> | number
    categoryId?: IntFilter<"LostItem"> | number
    itemName?: StringFilter<"LostItem"> | string
    status?: EnumStatusFilter<"LostItem"> | $Enums.Status
    imageUrl?: StringNullableFilter<"LostItem"> | string | null
    notes?: StringNullableFilter<"LostItem"> | string | null
    line?: XOR<LineScalarRelationFilter, LineWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type LostItemOrderByWithRelationInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
    itemName?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    line?: LineOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type LostItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LostItemWhereInput | LostItemWhereInput[]
    OR?: LostItemWhereInput[]
    NOT?: LostItemWhereInput | LostItemWhereInput[]
    lineId?: IntFilter<"LostItem"> | number
    categoryId?: IntFilter<"LostItem"> | number
    itemName?: StringFilter<"LostItem"> | string
    status?: EnumStatusFilter<"LostItem"> | $Enums.Status
    imageUrl?: StringNullableFilter<"LostItem"> | string | null
    notes?: StringNullableFilter<"LostItem"> | string | null
    line?: XOR<LineScalarRelationFilter, LineWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type LostItemOrderByWithAggregationInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
    itemName?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: LostItemCountOrderByAggregateInput
    _avg?: LostItemAvgOrderByAggregateInput
    _max?: LostItemMaxOrderByAggregateInput
    _min?: LostItemMinOrderByAggregateInput
    _sum?: LostItemSumOrderByAggregateInput
  }

  export type LostItemScalarWhereWithAggregatesInput = {
    AND?: LostItemScalarWhereWithAggregatesInput | LostItemScalarWhereWithAggregatesInput[]
    OR?: LostItemScalarWhereWithAggregatesInput[]
    NOT?: LostItemScalarWhereWithAggregatesInput | LostItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LostItem"> | number
    lineId?: IntWithAggregatesFilter<"LostItem"> | number
    categoryId?: IntWithAggregatesFilter<"LostItem"> | number
    itemName?: StringWithAggregatesFilter<"LostItem"> | string
    status?: EnumStatusWithAggregatesFilter<"LostItem"> | $Enums.Status
    imageUrl?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
    notes?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
  }

  export type LineCreateInput = {
    name: string
    lostItems?: LostItemCreateNestedManyWithoutLineInput
  }

  export type LineUncheckedCreateInput = {
    id?: number
    name: string
    lostItems?: LostItemUncheckedCreateNestedManyWithoutLineInput
  }

  export type LineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lostItems?: LostItemUpdateManyWithoutLineNestedInput
  }

  export type LineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lostItems?: LostItemUncheckedUpdateManyWithoutLineNestedInput
  }

  export type LineCreateManyInput = {
    id?: number
    name: string
  }

  export type LineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    lostItems?: LostItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    lostItems?: LostItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lostItems?: LostItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lostItems?: LostItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LostItemCreateInput = {
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
    line: LineCreateNestedOneWithoutLostItemsInput
    category: CategoryCreateNestedOneWithoutLostItemsInput
  }

  export type LostItemUncheckedCreateInput = {
    id?: number
    lineId: number
    categoryId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    line?: LineUpdateOneRequiredWithoutLostItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutLostItemsNestedInput
  }

  export type LostItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LostItemCreateManyInput = {
    id?: number
    lineId: number
    categoryId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemUpdateManyMutationInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LostItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LostItemListRelationFilter = {
    every?: LostItemWhereInput
    some?: LostItemWhereInput
    none?: LostItemWhereInput
  }

  export type LostItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LineScalarRelationFilter = {
    is?: LineWhereInput
    isNot?: LineWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LostItemCountOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
    itemName?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
  }

  export type LostItemAvgOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
  }

  export type LostItemMaxOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
    itemName?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
  }

  export type LostItemMinOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
    itemName?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
  }

  export type LostItemSumOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type LostItemCreateNestedManyWithoutLineInput = {
    create?: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput> | LostItemCreateWithoutLineInput[] | LostItemUncheckedCreateWithoutLineInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutLineInput | LostItemCreateOrConnectWithoutLineInput[]
    createMany?: LostItemCreateManyLineInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type LostItemUncheckedCreateNestedManyWithoutLineInput = {
    create?: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput> | LostItemCreateWithoutLineInput[] | LostItemUncheckedCreateWithoutLineInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutLineInput | LostItemCreateOrConnectWithoutLineInput[]
    createMany?: LostItemCreateManyLineInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LostItemUpdateManyWithoutLineNestedInput = {
    create?: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput> | LostItemCreateWithoutLineInput[] | LostItemUncheckedCreateWithoutLineInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutLineInput | LostItemCreateOrConnectWithoutLineInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutLineInput | LostItemUpsertWithWhereUniqueWithoutLineInput[]
    createMany?: LostItemCreateManyLineInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutLineInput | LostItemUpdateWithWhereUniqueWithoutLineInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutLineInput | LostItemUpdateManyWithWhereWithoutLineInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LostItemUncheckedUpdateManyWithoutLineNestedInput = {
    create?: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput> | LostItemCreateWithoutLineInput[] | LostItemUncheckedCreateWithoutLineInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutLineInput | LostItemCreateOrConnectWithoutLineInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutLineInput | LostItemUpsertWithWhereUniqueWithoutLineInput[]
    createMany?: LostItemCreateManyLineInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutLineInput | LostItemUpdateWithWhereUniqueWithoutLineInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutLineInput | LostItemUpdateManyWithWhereWithoutLineInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type LostItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput> | LostItemCreateWithoutCategoryInput[] | LostItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutCategoryInput | LostItemCreateOrConnectWithoutCategoryInput[]
    createMany?: LostItemCreateManyCategoryInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type LostItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput> | LostItemCreateWithoutCategoryInput[] | LostItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutCategoryInput | LostItemCreateOrConnectWithoutCategoryInput[]
    createMany?: LostItemCreateManyCategoryInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type LostItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput> | LostItemCreateWithoutCategoryInput[] | LostItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutCategoryInput | LostItemCreateOrConnectWithoutCategoryInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutCategoryInput | LostItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LostItemCreateManyCategoryInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutCategoryInput | LostItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutCategoryInput | LostItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type LostItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput> | LostItemCreateWithoutCategoryInput[] | LostItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutCategoryInput | LostItemCreateOrConnectWithoutCategoryInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutCategoryInput | LostItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LostItemCreateManyCategoryInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutCategoryInput | LostItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutCategoryInput | LostItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type LineCreateNestedOneWithoutLostItemsInput = {
    create?: XOR<LineCreateWithoutLostItemsInput, LineUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: LineCreateOrConnectWithoutLostItemsInput
    connect?: LineWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutLostItemsInput = {
    create?: XOR<CategoryCreateWithoutLostItemsInput, CategoryUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutLostItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LineUpdateOneRequiredWithoutLostItemsNestedInput = {
    create?: XOR<LineCreateWithoutLostItemsInput, LineUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: LineCreateOrConnectWithoutLostItemsInput
    upsert?: LineUpsertWithoutLostItemsInput
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutLostItemsInput, LineUpdateWithoutLostItemsInput>, LineUncheckedUpdateWithoutLostItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutLostItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutLostItemsInput, CategoryUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutLostItemsInput
    upsert?: CategoryUpsertWithoutLostItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutLostItemsInput, CategoryUpdateWithoutLostItemsInput>, CategoryUncheckedUpdateWithoutLostItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LostItemCreateWithoutLineInput = {
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
    category: CategoryCreateNestedOneWithoutLostItemsInput
  }

  export type LostItemUncheckedCreateWithoutLineInput = {
    id?: number
    categoryId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemCreateOrConnectWithoutLineInput = {
    where: LostItemWhereUniqueInput
    create: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput>
  }

  export type LostItemCreateManyLineInputEnvelope = {
    data: LostItemCreateManyLineInput | LostItemCreateManyLineInput[]
  }

  export type LostItemUpsertWithWhereUniqueWithoutLineInput = {
    where: LostItemWhereUniqueInput
    update: XOR<LostItemUpdateWithoutLineInput, LostItemUncheckedUpdateWithoutLineInput>
    create: XOR<LostItemCreateWithoutLineInput, LostItemUncheckedCreateWithoutLineInput>
  }

  export type LostItemUpdateWithWhereUniqueWithoutLineInput = {
    where: LostItemWhereUniqueInput
    data: XOR<LostItemUpdateWithoutLineInput, LostItemUncheckedUpdateWithoutLineInput>
  }

  export type LostItemUpdateManyWithWhereWithoutLineInput = {
    where: LostItemScalarWhereInput
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyWithoutLineInput>
  }

  export type LostItemScalarWhereInput = {
    AND?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
    OR?: LostItemScalarWhereInput[]
    NOT?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
    id?: IntFilter<"LostItem"> | number
    lineId?: IntFilter<"LostItem"> | number
    categoryId?: IntFilter<"LostItem"> | number
    itemName?: StringFilter<"LostItem"> | string
    status?: EnumStatusFilter<"LostItem"> | $Enums.Status
    imageUrl?: StringNullableFilter<"LostItem"> | string | null
    notes?: StringNullableFilter<"LostItem"> | string | null
  }

  export type LostItemCreateWithoutCategoryInput = {
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
    line: LineCreateNestedOneWithoutLostItemsInput
  }

  export type LostItemUncheckedCreateWithoutCategoryInput = {
    id?: number
    lineId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemCreateOrConnectWithoutCategoryInput = {
    where: LostItemWhereUniqueInput
    create: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput>
  }

  export type LostItemCreateManyCategoryInputEnvelope = {
    data: LostItemCreateManyCategoryInput | LostItemCreateManyCategoryInput[]
  }

  export type LostItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: LostItemWhereUniqueInput
    update: XOR<LostItemUpdateWithoutCategoryInput, LostItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<LostItemCreateWithoutCategoryInput, LostItemUncheckedCreateWithoutCategoryInput>
  }

  export type LostItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: LostItemWhereUniqueInput
    data: XOR<LostItemUpdateWithoutCategoryInput, LostItemUncheckedUpdateWithoutCategoryInput>
  }

  export type LostItemUpdateManyWithWhereWithoutCategoryInput = {
    where: LostItemScalarWhereInput
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type LineCreateWithoutLostItemsInput = {
    name: string
  }

  export type LineUncheckedCreateWithoutLostItemsInput = {
    id?: number
    name: string
  }

  export type LineCreateOrConnectWithoutLostItemsInput = {
    where: LineWhereUniqueInput
    create: XOR<LineCreateWithoutLostItemsInput, LineUncheckedCreateWithoutLostItemsInput>
  }

  export type CategoryCreateWithoutLostItemsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutLostItemsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutLostItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutLostItemsInput, CategoryUncheckedCreateWithoutLostItemsInput>
  }

  export type LineUpsertWithoutLostItemsInput = {
    update: XOR<LineUpdateWithoutLostItemsInput, LineUncheckedUpdateWithoutLostItemsInput>
    create: XOR<LineCreateWithoutLostItemsInput, LineUncheckedCreateWithoutLostItemsInput>
    where?: LineWhereInput
  }

  export type LineUpdateToOneWithWhereWithoutLostItemsInput = {
    where?: LineWhereInput
    data: XOR<LineUpdateWithoutLostItemsInput, LineUncheckedUpdateWithoutLostItemsInput>
  }

  export type LineUpdateWithoutLostItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LineUncheckedUpdateWithoutLostItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutLostItemsInput = {
    update: XOR<CategoryUpdateWithoutLostItemsInput, CategoryUncheckedUpdateWithoutLostItemsInput>
    create: XOR<CategoryCreateWithoutLostItemsInput, CategoryUncheckedCreateWithoutLostItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutLostItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutLostItemsInput, CategoryUncheckedUpdateWithoutLostItemsInput>
  }

  export type CategoryUpdateWithoutLostItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutLostItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LostItemCreateManyLineInput = {
    id?: number
    categoryId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemUpdateWithoutLineInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutLostItemsNestedInput
  }

  export type LostItemUncheckedUpdateWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LostItemUncheckedUpdateManyWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LostItemCreateManyCategoryInput = {
    id?: number
    lineId: number
    itemName: string
    status: $Enums.Status
    imageUrl?: string | null
    notes?: string | null
  }

  export type LostItemUpdateWithoutCategoryInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    line?: LineUpdateOneRequiredWithoutLostItemsNestedInput
  }

  export type LostItemUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LostItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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