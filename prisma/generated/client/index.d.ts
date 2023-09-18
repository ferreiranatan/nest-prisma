
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Console
 * 
 */
export type Console = $Result.DefaultSelection<Prisma.$ConsolePayload>
/**
 * Model Jogo
 * 
 */
export type Jogo = $Result.DefaultSelection<Prisma.$JogoPayload>
/**
 * Model Desenvolvedor
 * 
 */
export type Desenvolvedor = $Result.DefaultSelection<Prisma.$DesenvolvedorPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Consoles
 * const consoles = await prisma.console.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Consoles
   * const consoles = await prisma.console.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.console`: Exposes CRUD operations for the **Console** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consoles
    * const consoles = await prisma.console.findMany()
    * ```
    */
  get console(): Prisma.ConsoleDelegate<ExtArgs>;

  /**
   * `prisma.jogo`: Exposes CRUD operations for the **Jogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogos
    * const jogos = await prisma.jogo.findMany()
    * ```
    */
  get jogo(): Prisma.JogoDelegate<ExtArgs>;

  /**
   * `prisma.desenvolvedor`: Exposes CRUD operations for the **Desenvolvedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Desenvolvedors
    * const desenvolvedors = await prisma.desenvolvedor.findMany()
    * ```
    */
  get desenvolvedor(): Prisma.DesenvolvedorDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Console: 'Console',
    Jogo: 'Jogo',
    Desenvolvedor: 'Desenvolvedor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'console' | 'jogo' | 'desenvolvedor'
      txIsolationLevel: never
    },
    model: {
      Console: {
        payload: Prisma.$ConsolePayload<ExtArgs>
        fields: Prisma.ConsoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          findFirst: {
            args: Prisma.ConsoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          findMany: {
            args: Prisma.ConsoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>[]
          }
          create: {
            args: Prisma.ConsoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          createMany: {
            args: Prisma.ConsoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConsoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          update: {
            args: Prisma.ConsoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          deleteMany: {
            args: Prisma.ConsoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConsoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConsoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          aggregate: {
            args: Prisma.ConsoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConsole>
          }
          groupBy: {
            args: Prisma.ConsoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConsoleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConsoleFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConsoleAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ConsoleCountArgs<ExtArgs>,
            result: $Utils.Optional<ConsoleCountAggregateOutputType> | number
          }
        }
      }
      Jogo: {
        payload: Prisma.$JogoPayload<ExtArgs>
        fields: Prisma.JogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findFirst: {
            args: Prisma.JogoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findMany: {
            args: Prisma.JogoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          create: {
            args: Prisma.JogoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          createMany: {
            args: Prisma.JogoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JogoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          update: {
            args: Prisma.JogoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          deleteMany: {
            args: Prisma.JogoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JogoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JogoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          aggregate: {
            args: Prisma.JogoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJogo>
          }
          groupBy: {
            args: Prisma.JogoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JogoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JogoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.JogoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.JogoCountArgs<ExtArgs>,
            result: $Utils.Optional<JogoCountAggregateOutputType> | number
          }
        }
      }
      Desenvolvedor: {
        payload: Prisma.$DesenvolvedorPayload<ExtArgs>
        fields: Prisma.DesenvolvedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesenvolvedorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesenvolvedorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          findFirst: {
            args: Prisma.DesenvolvedorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesenvolvedorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          findMany: {
            args: Prisma.DesenvolvedorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>[]
          }
          create: {
            args: Prisma.DesenvolvedorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          createMany: {
            args: Prisma.DesenvolvedorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DesenvolvedorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          update: {
            args: Prisma.DesenvolvedorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          deleteMany: {
            args: Prisma.DesenvolvedorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DesenvolvedorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DesenvolvedorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesenvolvedorPayload>
          }
          aggregate: {
            args: Prisma.DesenvolvedorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDesenvolvedor>
          }
          groupBy: {
            args: Prisma.DesenvolvedorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DesenvolvedorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DesenvolvedorFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DesenvolvedorAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DesenvolvedorCountArgs<ExtArgs>,
            result: $Utils.Optional<DesenvolvedorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type JogoCountOutputType
   */

  export type JogoCountOutputType = {
    Desenvolvedor: number
    Console: number
  }

  export type JogoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Desenvolvedor?: boolean | JogoCountOutputTypeCountDesenvolvedorArgs
    Console?: boolean | JogoCountOutputTypeCountConsoleArgs
  }

  // Custom InputTypes

  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoCountOutputType
     */
    select?: JogoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeCountDesenvolvedorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesenvolvedorWhereInput
  }


  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeCountConsoleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsoleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Console
   */

  export type AggregateConsole = {
    _count: ConsoleCountAggregateOutputType | null
    _avg: ConsoleAvgAggregateOutputType | null
    _sum: ConsoleSumAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  export type ConsoleAvgAggregateOutputType = {
    codigo: number | null
  }

  export type ConsoleSumAggregateOutputType = {
    codigo: number | null
  }

  export type ConsoleMinAggregateOutputType = {
    id: string | null
    codigo: number | null
    nome: string | null
    dataLancamento: string | null
    empresa: string | null
    authorId: string | null
  }

  export type ConsoleMaxAggregateOutputType = {
    id: string | null
    codigo: number | null
    nome: string | null
    dataLancamento: string | null
    empresa: string | null
    authorId: string | null
  }

  export type ConsoleCountAggregateOutputType = {
    id: number
    codigo: number
    nome: number
    dataLancamento: number
    empresa: number
    authorId: number
    _all: number
  }


  export type ConsoleAvgAggregateInputType = {
    codigo?: true
  }

  export type ConsoleSumAggregateInputType = {
    codigo?: true
  }

  export type ConsoleMinAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    dataLancamento?: true
    empresa?: true
    authorId?: true
  }

  export type ConsoleMaxAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    dataLancamento?: true
    empresa?: true
    authorId?: true
  }

  export type ConsoleCountAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    dataLancamento?: true
    empresa?: true
    authorId?: true
    _all?: true
  }

  export type ConsoleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Console to aggregate.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consoles
    **/
    _count?: true | ConsoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsoleMaxAggregateInputType
  }

  export type GetConsoleAggregateType<T extends ConsoleAggregateArgs> = {
        [P in keyof T & keyof AggregateConsole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsole[P]>
      : GetScalarType<T[P], AggregateConsole[P]>
  }




  export type ConsoleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsoleWhereInput
    orderBy?: ConsoleOrderByWithAggregationInput | ConsoleOrderByWithAggregationInput[]
    by: ConsoleScalarFieldEnum[] | ConsoleScalarFieldEnum
    having?: ConsoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsoleCountAggregateInputType | true
    _avg?: ConsoleAvgAggregateInputType
    _sum?: ConsoleSumAggregateInputType
    _min?: ConsoleMinAggregateInputType
    _max?: ConsoleMaxAggregateInputType
  }

  export type ConsoleGroupByOutputType = {
    id: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
    authorId: string | null
    _count: ConsoleCountAggregateOutputType | null
    _avg: ConsoleAvgAggregateOutputType | null
    _sum: ConsoleSumAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  type GetConsoleGroupByPayload<T extends ConsoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
            : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
        }
      >
    >


  export type ConsoleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nome?: boolean
    dataLancamento?: boolean
    empresa?: boolean
    authorId?: boolean
    author?: boolean | Console$authorArgs<ExtArgs>
  }, ExtArgs["result"]["console"]>

  export type ConsoleSelectScalar = {
    id?: boolean
    codigo?: boolean
    nome?: boolean
    dataLancamento?: boolean
    empresa?: boolean
    authorId?: boolean
  }

  export type ConsoleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | Console$authorArgs<ExtArgs>
  }


  export type $ConsolePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Console"
    objects: {
      author: Prisma.$JogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      codigo: number
      nome: string
      dataLancamento: string
      empresa: string
      authorId: string | null
    }, ExtArgs["result"]["console"]>
    composites: {}
  }


  type ConsoleGetPayload<S extends boolean | null | undefined | ConsoleDefaultArgs> = $Result.GetResult<Prisma.$ConsolePayload, S>

  type ConsoleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConsoleFindManyArgs, 'select' | 'include'> & {
      select?: ConsoleCountAggregateInputType | true
    }

  export interface ConsoleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Console'], meta: { name: 'Console' } }
    /**
     * Find zero or one Console that matches the filter.
     * @param {ConsoleFindUniqueArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConsoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleFindUniqueArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Console that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConsoleFindUniqueOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConsoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Console that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindFirstArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConsoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleFindFirstArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Console that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindFirstOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConsoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Consoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consoles
     * const consoles = await prisma.console.findMany()
     * 
     * // Get first 10 Consoles
     * const consoles = await prisma.console.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consoleWithIdOnly = await prisma.console.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConsoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Console.
     * @param {ConsoleCreateArgs} args - Arguments to create a Console.
     * @example
     * // Create one Console
     * const Console = await prisma.console.create({
     *   data: {
     *     // ... data to create a Console
     *   }
     * })
     * 
    **/
    create<T extends ConsoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleCreateArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Consoles.
     *     @param {ConsoleCreateManyArgs} args - Arguments to create many Consoles.
     *     @example
     *     // Create many Consoles
     *     const console = await prisma.console.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConsoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Console.
     * @param {ConsoleDeleteArgs} args - Arguments to delete one Console.
     * @example
     * // Delete one Console
     * const Console = await prisma.console.delete({
     *   where: {
     *     // ... filter to delete one Console
     *   }
     * })
     * 
    **/
    delete<T extends ConsoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleDeleteArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Console.
     * @param {ConsoleUpdateArgs} args - Arguments to update one Console.
     * @example
     * // Update one Console
     * const console = await prisma.console.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConsoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleUpdateArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Consoles.
     * @param {ConsoleDeleteManyArgs} args - Arguments to filter Consoles to delete.
     * @example
     * // Delete a few Consoles
     * const { count } = await prisma.console.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConsoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consoles
     * const console = await prisma.console.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConsoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Console.
     * @param {ConsoleUpsertArgs} args - Arguments to update or create a Console.
     * @example
     * // Update or create a Console
     * const console = await prisma.console.upsert({
     *   create: {
     *     // ... data to create a Console
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Console we want to update
     *   }
     * })
    **/
    upsert<T extends ConsoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConsoleUpsertArgs<ExtArgs>>
    ): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Consoles that matches the filter.
     * @param {ConsoleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const console = await prisma.console.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ConsoleFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Console.
     * @param {ConsoleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const console = await prisma.console.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ConsoleAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleCountArgs} args - Arguments to filter Consoles to count.
     * @example
     * // Count the number of Consoles
     * const count = await prisma.console.count({
     *   where: {
     *     // ... the filter for the Consoles we want to count
     *   }
     * })
    **/
    count<T extends ConsoleCountArgs>(
      args?: Subset<T, ConsoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsoleAggregateArgs>(args: Subset<T, ConsoleAggregateArgs>): Prisma.PrismaPromise<GetConsoleAggregateType<T>>

    /**
     * Group by Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleGroupByArgs} args - Group by arguments.
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
      T extends ConsoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsoleGroupByArgs['orderBy'] }
        : { orderBy?: ConsoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Console model
   */
  readonly fields: ConsoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Console.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsoleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends Console$authorArgs<ExtArgs> = {}>(args?: Subset<T, Console$authorArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Console model
   */ 
  interface ConsoleFieldRefs {
    readonly id: FieldRef<"Console", 'String'>
    readonly codigo: FieldRef<"Console", 'Int'>
    readonly nome: FieldRef<"Console", 'String'>
    readonly dataLancamento: FieldRef<"Console", 'String'>
    readonly empresa: FieldRef<"Console", 'String'>
    readonly authorId: FieldRef<"Console", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Console findUnique
   */
  export type ConsoleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where: ConsoleWhereUniqueInput
  }


  /**
   * Console findUniqueOrThrow
   */
  export type ConsoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where: ConsoleWhereUniqueInput
  }


  /**
   * Console findFirst
   */
  export type ConsoleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }


  /**
   * Console findFirstOrThrow
   */
  export type ConsoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }


  /**
   * Console findMany
   */
  export type ConsoleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Consoles to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }


  /**
   * Console create
   */
  export type ConsoleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Console.
     */
    data: XOR<ConsoleCreateInput, ConsoleUncheckedCreateInput>
  }


  /**
   * Console createMany
   */
  export type ConsoleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consoles.
     */
    data: ConsoleCreateManyInput | ConsoleCreateManyInput[]
  }


  /**
   * Console update
   */
  export type ConsoleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Console.
     */
    data: XOR<ConsoleUpdateInput, ConsoleUncheckedUpdateInput>
    /**
     * Choose, which Console to update.
     */
    where: ConsoleWhereUniqueInput
  }


  /**
   * Console updateMany
   */
  export type ConsoleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consoles.
     */
    data: XOR<ConsoleUpdateManyMutationInput, ConsoleUncheckedUpdateManyInput>
    /**
     * Filter which Consoles to update
     */
    where?: ConsoleWhereInput
  }


  /**
   * Console upsert
   */
  export type ConsoleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Console to update in case it exists.
     */
    where: ConsoleWhereUniqueInput
    /**
     * In case the Console found by the `where` argument doesn't exist, create a new Console with this data.
     */
    create: XOR<ConsoleCreateInput, ConsoleUncheckedCreateInput>
    /**
     * In case the Console was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsoleUpdateInput, ConsoleUncheckedUpdateInput>
  }


  /**
   * Console delete
   */
  export type ConsoleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter which Console to delete.
     */
    where: ConsoleWhereUniqueInput
  }


  /**
   * Console deleteMany
   */
  export type ConsoleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consoles to delete
     */
    where?: ConsoleWhereInput
  }


  /**
   * Console findRaw
   */
  export type ConsoleFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Console aggregateRaw
   */
  export type ConsoleAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Console.author
   */
  export type Console$authorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
  }


  /**
   * Console without action
   */
  export type ConsoleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
  }



  /**
   * Model Jogo
   */

  export type AggregateJogo = {
    _count: JogoCountAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  export type JogoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    dataLancamento: string | null
    website: string | null
    genero: string | null
    urlCapas: string | null
  }

  export type JogoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    dataLancamento: string | null
    website: string | null
    genero: string | null
    urlCapas: string | null
  }

  export type JogoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    dataLancamento: number
    website: number
    genero: number
    urlCapas: number
    _all: number
  }


  export type JogoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataLancamento?: true
    website?: true
    genero?: true
    urlCapas?: true
  }

  export type JogoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataLancamento?: true
    website?: true
    genero?: true
    urlCapas?: true
  }

  export type JogoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataLancamento?: true
    website?: true
    genero?: true
    urlCapas?: true
    _all?: true
  }

  export type JogoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogo to aggregate.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogos
    **/
    _count?: true | JogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoMaxAggregateInputType
  }

  export type GetJogoAggregateType<T extends JogoAggregateArgs> = {
        [P in keyof T & keyof AggregateJogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogo[P]>
      : GetScalarType<T[P], AggregateJogo[P]>
  }




  export type JogoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithAggregationInput | JogoOrderByWithAggregationInput[]
    by: JogoScalarFieldEnum[] | JogoScalarFieldEnum
    having?: JogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoCountAggregateInputType | true
    _min?: JogoMinAggregateInputType
    _max?: JogoMaxAggregateInputType
  }

  export type JogoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    _count: JogoCountAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  type GetJogoGroupByPayload<T extends JogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoGroupByOutputType[P]>
            : GetScalarType<T[P], JogoGroupByOutputType[P]>
        }
      >
    >


  export type JogoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataLancamento?: boolean
    website?: boolean
    genero?: boolean
    urlCapas?: boolean
    Desenvolvedor?: boolean | Jogo$DesenvolvedorArgs<ExtArgs>
    Console?: boolean | Jogo$ConsoleArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataLancamento?: boolean
    website?: boolean
    genero?: boolean
    urlCapas?: boolean
  }

  export type JogoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Desenvolvedor?: boolean | Jogo$DesenvolvedorArgs<ExtArgs>
    Console?: boolean | Jogo$ConsoleArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JogoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Jogo"
    objects: {
      Desenvolvedor: Prisma.$DesenvolvedorPayload<ExtArgs>[]
      Console: Prisma.$ConsolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      nome: string
      descricao: string
      dataLancamento: string
      website: string
      genero: string
      urlCapas: string
    }, ExtArgs["result"]["jogo"]>
    composites: {}
  }


  type JogoGetPayload<S extends boolean | null | undefined | JogoDefaultArgs> = $Result.GetResult<Prisma.$JogoPayload, S>

  type JogoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<JogoFindManyArgs, 'select' | 'include'> & {
      select?: JogoCountAggregateInputType | true
    }

  export interface JogoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogo'], meta: { name: 'Jogo' } }
    /**
     * Find zero or one Jogo that matches the filter.
     * @param {JogoFindUniqueArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JogoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JogoFindUniqueArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jogo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JogoFindUniqueOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JogoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JogoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoFindFirstArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JogoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogos
     * const jogos = await prisma.jogo.findMany()
     * 
     * // Get first 10 Jogos
     * const jogos = await prisma.jogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogoWithIdOnly = await prisma.jogo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JogoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jogo.
     * @param {JogoCreateArgs} args - Arguments to create a Jogo.
     * @example
     * // Create one Jogo
     * const Jogo = await prisma.jogo.create({
     *   data: {
     *     // ... data to create a Jogo
     *   }
     * })
     * 
    **/
    create<T extends JogoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JogoCreateArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jogos.
     *     @param {JogoCreateManyArgs} args - Arguments to create many Jogos.
     *     @example
     *     // Create many Jogos
     *     const jogo = await prisma.jogo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JogoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jogo.
     * @param {JogoDeleteArgs} args - Arguments to delete one Jogo.
     * @example
     * // Delete one Jogo
     * const Jogo = await prisma.jogo.delete({
     *   where: {
     *     // ... filter to delete one Jogo
     *   }
     * })
     * 
    **/
    delete<T extends JogoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JogoDeleteArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jogo.
     * @param {JogoUpdateArgs} args - Arguments to update one Jogo.
     * @example
     * // Update one Jogo
     * const jogo = await prisma.jogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JogoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JogoUpdateArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jogos.
     * @param {JogoDeleteManyArgs} args - Arguments to filter Jogos to delete.
     * @example
     * // Delete a few Jogos
     * const { count } = await prisma.jogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JogoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JogoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JogoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jogo.
     * @param {JogoUpsertArgs} args - Arguments to update or create a Jogo.
     * @example
     * // Update or create a Jogo
     * const jogo = await prisma.jogo.upsert({
     *   create: {
     *     // ... data to create a Jogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogo we want to update
     *   }
     * })
    **/
    upsert<T extends JogoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JogoUpsertArgs<ExtArgs>>
    ): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Jogos that matches the filter.
     * @param {JogoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jogo = await prisma.jogo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: JogoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Jogo.
     * @param {JogoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jogo = await prisma.jogo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: JogoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoCountArgs} args - Arguments to filter Jogos to count.
     * @example
     * // Count the number of Jogos
     * const count = await prisma.jogo.count({
     *   where: {
     *     // ... the filter for the Jogos we want to count
     *   }
     * })
    **/
    count<T extends JogoCountArgs>(
      args?: Subset<T, JogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogoAggregateArgs>(args: Subset<T, JogoAggregateArgs>): Prisma.PrismaPromise<GetJogoAggregateType<T>>

    /**
     * Group by Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoGroupByArgs} args - Group by arguments.
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
      T extends JogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoGroupByArgs['orderBy'] }
        : { orderBy?: JogoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogo model
   */
  readonly fields: JogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Desenvolvedor<T extends Jogo$DesenvolvedorArgs<ExtArgs> = {}>(args?: Subset<T, Jogo$DesenvolvedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findMany'> | Null>;

    Console<T extends Jogo$ConsoleArgs<ExtArgs> = {}>(args?: Subset<T, Jogo$ConsoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Jogo model
   */ 
  interface JogoFieldRefs {
    readonly id: FieldRef<"Jogo", 'String'>
    readonly nome: FieldRef<"Jogo", 'String'>
    readonly descricao: FieldRef<"Jogo", 'String'>
    readonly dataLancamento: FieldRef<"Jogo", 'String'>
    readonly website: FieldRef<"Jogo", 'String'>
    readonly genero: FieldRef<"Jogo", 'String'>
    readonly urlCapas: FieldRef<"Jogo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Jogo findUnique
   */
  export type JogoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }


  /**
   * Jogo findUniqueOrThrow
   */
  export type JogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }


  /**
   * Jogo findFirst
   */
  export type JogoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }


  /**
   * Jogo findFirstOrThrow
   */
  export type JogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }


  /**
   * Jogo findMany
   */
  export type JogoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogos to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }


  /**
   * Jogo create
   */
  export type JogoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogo.
     */
    data: XOR<JogoCreateInput, JogoUncheckedCreateInput>
  }


  /**
   * Jogo createMany
   */
  export type JogoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
  }


  /**
   * Jogo update
   */
  export type JogoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogo.
     */
    data: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
    /**
     * Choose, which Jogo to update.
     */
    where: JogoWhereUniqueInput
  }


  /**
   * Jogo updateMany
   */
  export type JogoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
  }


  /**
   * Jogo upsert
   */
  export type JogoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogo to update in case it exists.
     */
    where: JogoWhereUniqueInput
    /**
     * In case the Jogo found by the `where` argument doesn't exist, create a new Jogo with this data.
     */
    create: XOR<JogoCreateInput, JogoUncheckedCreateInput>
    /**
     * In case the Jogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
  }


  /**
   * Jogo delete
   */
  export type JogoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter which Jogo to delete.
     */
    where: JogoWhereUniqueInput
  }


  /**
   * Jogo deleteMany
   */
  export type JogoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogos to delete
     */
    where?: JogoWhereInput
  }


  /**
   * Jogo findRaw
   */
  export type JogoFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jogo aggregateRaw
   */
  export type JogoAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jogo.Desenvolvedor
   */
  export type Jogo$DesenvolvedorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    where?: DesenvolvedorWhereInput
    orderBy?: DesenvolvedorOrderByWithRelationInput | DesenvolvedorOrderByWithRelationInput[]
    cursor?: DesenvolvedorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesenvolvedorScalarFieldEnum | DesenvolvedorScalarFieldEnum[]
  }


  /**
   * Jogo.Console
   */
  export type Jogo$ConsoleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsoleInclude<ExtArgs> | null
    where?: ConsoleWhereInput
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    cursor?: ConsoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }


  /**
   * Jogo without action
   */
  export type JogoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
  }



  /**
   * Model Desenvolvedor
   */

  export type AggregateDesenvolvedor = {
    _count: DesenvolvedorCountAggregateOutputType | null
    _min: DesenvolvedorMinAggregateOutputType | null
    _max: DesenvolvedorMaxAggregateOutputType | null
  }

  export type DesenvolvedorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    dataFundacao: string | null
    website: string | null
    sede: string | null
    authorId: string | null
  }

  export type DesenvolvedorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    dataFundacao: string | null
    website: string | null
    sede: string | null
    authorId: string | null
  }

  export type DesenvolvedorCountAggregateOutputType = {
    id: number
    nome: number
    dataFundacao: number
    website: number
    sede: number
    authorId: number
    _all: number
  }


  export type DesenvolvedorMinAggregateInputType = {
    id?: true
    nome?: true
    dataFundacao?: true
    website?: true
    sede?: true
    authorId?: true
  }

  export type DesenvolvedorMaxAggregateInputType = {
    id?: true
    nome?: true
    dataFundacao?: true
    website?: true
    sede?: true
    authorId?: true
  }

  export type DesenvolvedorCountAggregateInputType = {
    id?: true
    nome?: true
    dataFundacao?: true
    website?: true
    sede?: true
    authorId?: true
    _all?: true
  }

  export type DesenvolvedorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desenvolvedor to aggregate.
     */
    where?: DesenvolvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desenvolvedors to fetch.
     */
    orderBy?: DesenvolvedorOrderByWithRelationInput | DesenvolvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesenvolvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desenvolvedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desenvolvedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Desenvolvedors
    **/
    _count?: true | DesenvolvedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesenvolvedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesenvolvedorMaxAggregateInputType
  }

  export type GetDesenvolvedorAggregateType<T extends DesenvolvedorAggregateArgs> = {
        [P in keyof T & keyof AggregateDesenvolvedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesenvolvedor[P]>
      : GetScalarType<T[P], AggregateDesenvolvedor[P]>
  }




  export type DesenvolvedorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesenvolvedorWhereInput
    orderBy?: DesenvolvedorOrderByWithAggregationInput | DesenvolvedorOrderByWithAggregationInput[]
    by: DesenvolvedorScalarFieldEnum[] | DesenvolvedorScalarFieldEnum
    having?: DesenvolvedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesenvolvedorCountAggregateInputType | true
    _min?: DesenvolvedorMinAggregateInputType
    _max?: DesenvolvedorMaxAggregateInputType
  }

  export type DesenvolvedorGroupByOutputType = {
    id: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
    authorId: string | null
    _count: DesenvolvedorCountAggregateOutputType | null
    _min: DesenvolvedorMinAggregateOutputType | null
    _max: DesenvolvedorMaxAggregateOutputType | null
  }

  type GetDesenvolvedorGroupByPayload<T extends DesenvolvedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesenvolvedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesenvolvedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesenvolvedorGroupByOutputType[P]>
            : GetScalarType<T[P], DesenvolvedorGroupByOutputType[P]>
        }
      >
    >


  export type DesenvolvedorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataFundacao?: boolean
    website?: boolean
    sede?: boolean
    authorId?: boolean
    author?: boolean | Desenvolvedor$authorArgs<ExtArgs>
  }, ExtArgs["result"]["desenvolvedor"]>

  export type DesenvolvedorSelectScalar = {
    id?: boolean
    nome?: boolean
    dataFundacao?: boolean
    website?: boolean
    sede?: boolean
    authorId?: boolean
  }

  export type DesenvolvedorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | Desenvolvedor$authorArgs<ExtArgs>
  }


  export type $DesenvolvedorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Desenvolvedor"
    objects: {
      author: Prisma.$JogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      nome: string
      dataFundacao: string
      website: string
      sede: string
      authorId: string | null
    }, ExtArgs["result"]["desenvolvedor"]>
    composites: {}
  }


  type DesenvolvedorGetPayload<S extends boolean | null | undefined | DesenvolvedorDefaultArgs> = $Result.GetResult<Prisma.$DesenvolvedorPayload, S>

  type DesenvolvedorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DesenvolvedorFindManyArgs, 'select' | 'include'> & {
      select?: DesenvolvedorCountAggregateInputType | true
    }

  export interface DesenvolvedorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Desenvolvedor'], meta: { name: 'Desenvolvedor' } }
    /**
     * Find zero or one Desenvolvedor that matches the filter.
     * @param {DesenvolvedorFindUniqueArgs} args - Arguments to find a Desenvolvedor
     * @example
     * // Get one Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DesenvolvedorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorFindUniqueArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Desenvolvedor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DesenvolvedorFindUniqueOrThrowArgs} args - Arguments to find a Desenvolvedor
     * @example
     * // Get one Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DesenvolvedorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Desenvolvedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorFindFirstArgs} args - Arguments to find a Desenvolvedor
     * @example
     * // Get one Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DesenvolvedorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorFindFirstArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Desenvolvedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorFindFirstOrThrowArgs} args - Arguments to find a Desenvolvedor
     * @example
     * // Get one Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DesenvolvedorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Desenvolvedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Desenvolvedors
     * const desenvolvedors = await prisma.desenvolvedor.findMany()
     * 
     * // Get first 10 Desenvolvedors
     * const desenvolvedors = await prisma.desenvolvedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const desenvolvedorWithIdOnly = await prisma.desenvolvedor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DesenvolvedorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Desenvolvedor.
     * @param {DesenvolvedorCreateArgs} args - Arguments to create a Desenvolvedor.
     * @example
     * // Create one Desenvolvedor
     * const Desenvolvedor = await prisma.desenvolvedor.create({
     *   data: {
     *     // ... data to create a Desenvolvedor
     *   }
     * })
     * 
    **/
    create<T extends DesenvolvedorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorCreateArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Desenvolvedors.
     *     @param {DesenvolvedorCreateManyArgs} args - Arguments to create many Desenvolvedors.
     *     @example
     *     // Create many Desenvolvedors
     *     const desenvolvedor = await prisma.desenvolvedor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DesenvolvedorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Desenvolvedor.
     * @param {DesenvolvedorDeleteArgs} args - Arguments to delete one Desenvolvedor.
     * @example
     * // Delete one Desenvolvedor
     * const Desenvolvedor = await prisma.desenvolvedor.delete({
     *   where: {
     *     // ... filter to delete one Desenvolvedor
     *   }
     * })
     * 
    **/
    delete<T extends DesenvolvedorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorDeleteArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Desenvolvedor.
     * @param {DesenvolvedorUpdateArgs} args - Arguments to update one Desenvolvedor.
     * @example
     * // Update one Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DesenvolvedorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorUpdateArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Desenvolvedors.
     * @param {DesenvolvedorDeleteManyArgs} args - Arguments to filter Desenvolvedors to delete.
     * @example
     * // Delete a few Desenvolvedors
     * const { count } = await prisma.desenvolvedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DesenvolvedorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesenvolvedorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Desenvolvedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Desenvolvedors
     * const desenvolvedor = await prisma.desenvolvedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DesenvolvedorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Desenvolvedor.
     * @param {DesenvolvedorUpsertArgs} args - Arguments to update or create a Desenvolvedor.
     * @example
     * // Update or create a Desenvolvedor
     * const desenvolvedor = await prisma.desenvolvedor.upsert({
     *   create: {
     *     // ... data to create a Desenvolvedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Desenvolvedor we want to update
     *   }
     * })
    **/
    upsert<T extends DesenvolvedorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DesenvolvedorUpsertArgs<ExtArgs>>
    ): Prisma__DesenvolvedorClient<$Result.GetResult<Prisma.$DesenvolvedorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Desenvolvedors that matches the filter.
     * @param {DesenvolvedorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const desenvolvedor = await prisma.desenvolvedor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DesenvolvedorFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Desenvolvedor.
     * @param {DesenvolvedorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const desenvolvedor = await prisma.desenvolvedor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DesenvolvedorAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Desenvolvedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorCountArgs} args - Arguments to filter Desenvolvedors to count.
     * @example
     * // Count the number of Desenvolvedors
     * const count = await prisma.desenvolvedor.count({
     *   where: {
     *     // ... the filter for the Desenvolvedors we want to count
     *   }
     * })
    **/
    count<T extends DesenvolvedorCountArgs>(
      args?: Subset<T, DesenvolvedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesenvolvedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Desenvolvedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesenvolvedorAggregateArgs>(args: Subset<T, DesenvolvedorAggregateArgs>): Prisma.PrismaPromise<GetDesenvolvedorAggregateType<T>>

    /**
     * Group by Desenvolvedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesenvolvedorGroupByArgs} args - Group by arguments.
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
      T extends DesenvolvedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesenvolvedorGroupByArgs['orderBy'] }
        : { orderBy?: DesenvolvedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesenvolvedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesenvolvedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Desenvolvedor model
   */
  readonly fields: DesenvolvedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Desenvolvedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesenvolvedorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends Desenvolvedor$authorArgs<ExtArgs> = {}>(args?: Subset<T, Desenvolvedor$authorArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Desenvolvedor model
   */ 
  interface DesenvolvedorFieldRefs {
    readonly id: FieldRef<"Desenvolvedor", 'String'>
    readonly nome: FieldRef<"Desenvolvedor", 'String'>
    readonly dataFundacao: FieldRef<"Desenvolvedor", 'String'>
    readonly website: FieldRef<"Desenvolvedor", 'String'>
    readonly sede: FieldRef<"Desenvolvedor", 'String'>
    readonly authorId: FieldRef<"Desenvolvedor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Desenvolvedor findUnique
   */
  export type DesenvolvedorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter, which Desenvolvedor to fetch.
     */
    where: DesenvolvedorWhereUniqueInput
  }


  /**
   * Desenvolvedor findUniqueOrThrow
   */
  export type DesenvolvedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter, which Desenvolvedor to fetch.
     */
    where: DesenvolvedorWhereUniqueInput
  }


  /**
   * Desenvolvedor findFirst
   */
  export type DesenvolvedorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter, which Desenvolvedor to fetch.
     */
    where?: DesenvolvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desenvolvedors to fetch.
     */
    orderBy?: DesenvolvedorOrderByWithRelationInput | DesenvolvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desenvolvedors.
     */
    cursor?: DesenvolvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desenvolvedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desenvolvedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desenvolvedors.
     */
    distinct?: DesenvolvedorScalarFieldEnum | DesenvolvedorScalarFieldEnum[]
  }


  /**
   * Desenvolvedor findFirstOrThrow
   */
  export type DesenvolvedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter, which Desenvolvedor to fetch.
     */
    where?: DesenvolvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desenvolvedors to fetch.
     */
    orderBy?: DesenvolvedorOrderByWithRelationInput | DesenvolvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desenvolvedors.
     */
    cursor?: DesenvolvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desenvolvedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desenvolvedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desenvolvedors.
     */
    distinct?: DesenvolvedorScalarFieldEnum | DesenvolvedorScalarFieldEnum[]
  }


  /**
   * Desenvolvedor findMany
   */
  export type DesenvolvedorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter, which Desenvolvedors to fetch.
     */
    where?: DesenvolvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desenvolvedors to fetch.
     */
    orderBy?: DesenvolvedorOrderByWithRelationInput | DesenvolvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Desenvolvedors.
     */
    cursor?: DesenvolvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desenvolvedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desenvolvedors.
     */
    skip?: number
    distinct?: DesenvolvedorScalarFieldEnum | DesenvolvedorScalarFieldEnum[]
  }


  /**
   * Desenvolvedor create
   */
  export type DesenvolvedorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Desenvolvedor.
     */
    data: XOR<DesenvolvedorCreateInput, DesenvolvedorUncheckedCreateInput>
  }


  /**
   * Desenvolvedor createMany
   */
  export type DesenvolvedorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Desenvolvedors.
     */
    data: DesenvolvedorCreateManyInput | DesenvolvedorCreateManyInput[]
  }


  /**
   * Desenvolvedor update
   */
  export type DesenvolvedorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Desenvolvedor.
     */
    data: XOR<DesenvolvedorUpdateInput, DesenvolvedorUncheckedUpdateInput>
    /**
     * Choose, which Desenvolvedor to update.
     */
    where: DesenvolvedorWhereUniqueInput
  }


  /**
   * Desenvolvedor updateMany
   */
  export type DesenvolvedorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Desenvolvedors.
     */
    data: XOR<DesenvolvedorUpdateManyMutationInput, DesenvolvedorUncheckedUpdateManyInput>
    /**
     * Filter which Desenvolvedors to update
     */
    where?: DesenvolvedorWhereInput
  }


  /**
   * Desenvolvedor upsert
   */
  export type DesenvolvedorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Desenvolvedor to update in case it exists.
     */
    where: DesenvolvedorWhereUniqueInput
    /**
     * In case the Desenvolvedor found by the `where` argument doesn't exist, create a new Desenvolvedor with this data.
     */
    create: XOR<DesenvolvedorCreateInput, DesenvolvedorUncheckedCreateInput>
    /**
     * In case the Desenvolvedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesenvolvedorUpdateInput, DesenvolvedorUncheckedUpdateInput>
  }


  /**
   * Desenvolvedor delete
   */
  export type DesenvolvedorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
    /**
     * Filter which Desenvolvedor to delete.
     */
    where: DesenvolvedorWhereUniqueInput
  }


  /**
   * Desenvolvedor deleteMany
   */
  export type DesenvolvedorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desenvolvedors to delete
     */
    where?: DesenvolvedorWhereInput
  }


  /**
   * Desenvolvedor findRaw
   */
  export type DesenvolvedorFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Desenvolvedor aggregateRaw
   */
  export type DesenvolvedorAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Desenvolvedor.author
   */
  export type Desenvolvedor$authorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
  }


  /**
   * Desenvolvedor without action
   */
  export type DesenvolvedorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desenvolvedor
     */
    select?: DesenvolvedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesenvolvedorInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const ConsoleScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    nome: 'nome',
    dataLancamento: 'dataLancamento',
    empresa: 'empresa',
    authorId: 'authorId'
  };

  export type ConsoleScalarFieldEnum = (typeof ConsoleScalarFieldEnum)[keyof typeof ConsoleScalarFieldEnum]


  export const JogoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    dataLancamento: 'dataLancamento',
    website: 'website',
    genero: 'genero',
    urlCapas: 'urlCapas'
  };

  export type JogoScalarFieldEnum = (typeof JogoScalarFieldEnum)[keyof typeof JogoScalarFieldEnum]


  export const DesenvolvedorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataFundacao: 'dataFundacao',
    website: 'website',
    sede: 'sede',
    authorId: 'authorId'
  };

  export type DesenvolvedorScalarFieldEnum = (typeof DesenvolvedorScalarFieldEnum)[keyof typeof DesenvolvedorScalarFieldEnum]


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


  export type ConsoleWhereInput = {
    AND?: ConsoleWhereInput | ConsoleWhereInput[]
    OR?: ConsoleWhereInput[]
    NOT?: ConsoleWhereInput | ConsoleWhereInput[]
    id?: StringFilter<"Console"> | string
    codigo?: IntFilter<"Console"> | number
    nome?: StringFilter<"Console"> | string
    dataLancamento?: StringFilter<"Console"> | string
    empresa?: StringFilter<"Console"> | string
    authorId?: StringNullableFilter<"Console"> | string | null
    author?: XOR<JogoNullableRelationFilter, JogoWhereInput> | null
  }

  export type ConsoleOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    dataLancamento?: SortOrder
    empresa?: SortOrder
    authorId?: SortOrder
    author?: JogoOrderByWithRelationInput
  }

  export type ConsoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ConsoleWhereInput | ConsoleWhereInput[]
    OR?: ConsoleWhereInput[]
    NOT?: ConsoleWhereInput | ConsoleWhereInput[]
    codigo?: IntFilter<"Console"> | number
    dataLancamento?: StringFilter<"Console"> | string
    empresa?: StringFilter<"Console"> | string
    authorId?: StringNullableFilter<"Console"> | string | null
    author?: XOR<JogoNullableRelationFilter, JogoWhereInput> | null
  }, "id" | "nome">

  export type ConsoleOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    dataLancamento?: SortOrder
    empresa?: SortOrder
    authorId?: SortOrder
    _count?: ConsoleCountOrderByAggregateInput
    _avg?: ConsoleAvgOrderByAggregateInput
    _max?: ConsoleMaxOrderByAggregateInput
    _min?: ConsoleMinOrderByAggregateInput
    _sum?: ConsoleSumOrderByAggregateInput
  }

  export type ConsoleScalarWhereWithAggregatesInput = {
    AND?: ConsoleScalarWhereWithAggregatesInput | ConsoleScalarWhereWithAggregatesInput[]
    OR?: ConsoleScalarWhereWithAggregatesInput[]
    NOT?: ConsoleScalarWhereWithAggregatesInput | ConsoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Console"> | string
    codigo?: IntWithAggregatesFilter<"Console"> | number
    nome?: StringWithAggregatesFilter<"Console"> | string
    dataLancamento?: StringWithAggregatesFilter<"Console"> | string
    empresa?: StringWithAggregatesFilter<"Console"> | string
    authorId?: StringNullableWithAggregatesFilter<"Console"> | string | null
  }

  export type JogoWhereInput = {
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id?: StringFilter<"Jogo"> | string
    nome?: StringFilter<"Jogo"> | string
    descricao?: StringFilter<"Jogo"> | string
    dataLancamento?: StringFilter<"Jogo"> | string
    website?: StringFilter<"Jogo"> | string
    genero?: StringFilter<"Jogo"> | string
    urlCapas?: StringFilter<"Jogo"> | string
    Desenvolvedor?: DesenvolvedorListRelationFilter
    Console?: ConsoleListRelationFilter
  }

  export type JogoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataLancamento?: SortOrder
    website?: SortOrder
    genero?: SortOrder
    urlCapas?: SortOrder
    Desenvolvedor?: DesenvolvedorOrderByRelationAggregateInput
    Console?: ConsoleOrderByRelationAggregateInput
  }

  export type JogoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    nome?: StringFilter<"Jogo"> | string
    descricao?: StringFilter<"Jogo"> | string
    dataLancamento?: StringFilter<"Jogo"> | string
    website?: StringFilter<"Jogo"> | string
    genero?: StringFilter<"Jogo"> | string
    urlCapas?: StringFilter<"Jogo"> | string
    Desenvolvedor?: DesenvolvedorListRelationFilter
    Console?: ConsoleListRelationFilter
  }, "id">

  export type JogoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataLancamento?: SortOrder
    website?: SortOrder
    genero?: SortOrder
    urlCapas?: SortOrder
    _count?: JogoCountOrderByAggregateInput
    _max?: JogoMaxOrderByAggregateInput
    _min?: JogoMinOrderByAggregateInput
  }

  export type JogoScalarWhereWithAggregatesInput = {
    AND?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    OR?: JogoScalarWhereWithAggregatesInput[]
    NOT?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jogo"> | string
    nome?: StringWithAggregatesFilter<"Jogo"> | string
    descricao?: StringWithAggregatesFilter<"Jogo"> | string
    dataLancamento?: StringWithAggregatesFilter<"Jogo"> | string
    website?: StringWithAggregatesFilter<"Jogo"> | string
    genero?: StringWithAggregatesFilter<"Jogo"> | string
    urlCapas?: StringWithAggregatesFilter<"Jogo"> | string
  }

  export type DesenvolvedorWhereInput = {
    AND?: DesenvolvedorWhereInput | DesenvolvedorWhereInput[]
    OR?: DesenvolvedorWhereInput[]
    NOT?: DesenvolvedorWhereInput | DesenvolvedorWhereInput[]
    id?: StringFilter<"Desenvolvedor"> | string
    nome?: StringFilter<"Desenvolvedor"> | string
    dataFundacao?: StringFilter<"Desenvolvedor"> | string
    website?: StringFilter<"Desenvolvedor"> | string
    sede?: StringFilter<"Desenvolvedor"> | string
    authorId?: StringNullableFilter<"Desenvolvedor"> | string | null
    author?: XOR<JogoNullableRelationFilter, JogoWhereInput> | null
  }

  export type DesenvolvedorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataFundacao?: SortOrder
    website?: SortOrder
    sede?: SortOrder
    authorId?: SortOrder
    author?: JogoOrderByWithRelationInput
  }

  export type DesenvolvedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    website?: string
    AND?: DesenvolvedorWhereInput | DesenvolvedorWhereInput[]
    OR?: DesenvolvedorWhereInput[]
    NOT?: DesenvolvedorWhereInput | DesenvolvedorWhereInput[]
    nome?: StringFilter<"Desenvolvedor"> | string
    dataFundacao?: StringFilter<"Desenvolvedor"> | string
    sede?: StringFilter<"Desenvolvedor"> | string
    authorId?: StringNullableFilter<"Desenvolvedor"> | string | null
    author?: XOR<JogoNullableRelationFilter, JogoWhereInput> | null
  }, "id" | "website">

  export type DesenvolvedorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataFundacao?: SortOrder
    website?: SortOrder
    sede?: SortOrder
    authorId?: SortOrder
    _count?: DesenvolvedorCountOrderByAggregateInput
    _max?: DesenvolvedorMaxOrderByAggregateInput
    _min?: DesenvolvedorMinOrderByAggregateInput
  }

  export type DesenvolvedorScalarWhereWithAggregatesInput = {
    AND?: DesenvolvedorScalarWhereWithAggregatesInput | DesenvolvedorScalarWhereWithAggregatesInput[]
    OR?: DesenvolvedorScalarWhereWithAggregatesInput[]
    NOT?: DesenvolvedorScalarWhereWithAggregatesInput | DesenvolvedorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Desenvolvedor"> | string
    nome?: StringWithAggregatesFilter<"Desenvolvedor"> | string
    dataFundacao?: StringWithAggregatesFilter<"Desenvolvedor"> | string
    website?: StringWithAggregatesFilter<"Desenvolvedor"> | string
    sede?: StringWithAggregatesFilter<"Desenvolvedor"> | string
    authorId?: StringNullableWithAggregatesFilter<"Desenvolvedor"> | string | null
  }

  export type ConsoleCreateInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
    author?: JogoCreateNestedOneWithoutConsoleInput
  }

  export type ConsoleUncheckedCreateInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
    authorId?: string | null
  }

  export type ConsoleUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    author?: JogoUpdateOneWithoutConsoleNestedInput
  }

  export type ConsoleUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsoleCreateManyInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
    authorId?: string | null
  }

  export type ConsoleUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JogoCreateInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Desenvolvedor?: DesenvolvedorCreateNestedManyWithoutAuthorInput
    Console?: ConsoleCreateNestedManyWithoutAuthorInput
  }

  export type JogoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Desenvolvedor?: DesenvolvedorUncheckedCreateNestedManyWithoutAuthorInput
    Console?: ConsoleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type JogoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Desenvolvedor?: DesenvolvedorUpdateManyWithoutAuthorNestedInput
    Console?: ConsoleUpdateManyWithoutAuthorNestedInput
  }

  export type JogoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Desenvolvedor?: DesenvolvedorUncheckedUpdateManyWithoutAuthorNestedInput
    Console?: ConsoleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type JogoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
  }

  export type JogoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
  }

  export type DesenvolvedorCreateInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
    author?: JogoCreateNestedOneWithoutDesenvolvedorInput
  }

  export type DesenvolvedorUncheckedCreateInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
    authorId?: string | null
  }

  export type DesenvolvedorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    author?: JogoUpdateOneWithoutDesenvolvedorNestedInput
  }

  export type DesenvolvedorUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesenvolvedorCreateManyInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
    authorId?: string | null
  }

  export type DesenvolvedorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
  }

  export type DesenvolvedorUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
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
    isSet?: boolean
  }

  export type JogoNullableRelationFilter = {
    is?: JogoWhereInput | null
    isNot?: JogoWhereInput | null
  }

  export type ConsoleCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    dataLancamento?: SortOrder
    empresa?: SortOrder
    authorId?: SortOrder
  }

  export type ConsoleAvgOrderByAggregateInput = {
    codigo?: SortOrder
  }

  export type ConsoleMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    dataLancamento?: SortOrder
    empresa?: SortOrder
    authorId?: SortOrder
  }

  export type ConsoleMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    dataLancamento?: SortOrder
    empresa?: SortOrder
    authorId?: SortOrder
  }

  export type ConsoleSumOrderByAggregateInput = {
    codigo?: SortOrder
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
    isSet?: boolean
  }

  export type DesenvolvedorListRelationFilter = {
    every?: DesenvolvedorWhereInput
    some?: DesenvolvedorWhereInput
    none?: DesenvolvedorWhereInput
  }

  export type ConsoleListRelationFilter = {
    every?: ConsoleWhereInput
    some?: ConsoleWhereInput
    none?: ConsoleWhereInput
  }

  export type DesenvolvedorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JogoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataLancamento?: SortOrder
    website?: SortOrder
    genero?: SortOrder
    urlCapas?: SortOrder
  }

  export type JogoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataLancamento?: SortOrder
    website?: SortOrder
    genero?: SortOrder
    urlCapas?: SortOrder
  }

  export type JogoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataLancamento?: SortOrder
    website?: SortOrder
    genero?: SortOrder
    urlCapas?: SortOrder
  }

  export type DesenvolvedorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataFundacao?: SortOrder
    website?: SortOrder
    sede?: SortOrder
    authorId?: SortOrder
  }

  export type DesenvolvedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataFundacao?: SortOrder
    website?: SortOrder
    sede?: SortOrder
    authorId?: SortOrder
  }

  export type DesenvolvedorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataFundacao?: SortOrder
    website?: SortOrder
    sede?: SortOrder
    authorId?: SortOrder
  }

  export type JogoCreateNestedOneWithoutConsoleInput = {
    create?: XOR<JogoCreateWithoutConsoleInput, JogoUncheckedCreateWithoutConsoleInput>
    connectOrCreate?: JogoCreateOrConnectWithoutConsoleInput
    connect?: JogoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type JogoUpdateOneWithoutConsoleNestedInput = {
    create?: XOR<JogoCreateWithoutConsoleInput, JogoUncheckedCreateWithoutConsoleInput>
    connectOrCreate?: JogoCreateOrConnectWithoutConsoleInput
    upsert?: JogoUpsertWithoutConsoleInput
    disconnect?: boolean
    delete?: JogoWhereInput | boolean
    connect?: JogoWhereUniqueInput
    update?: XOR<XOR<JogoUpdateToOneWithWhereWithoutConsoleInput, JogoUpdateWithoutConsoleInput>, JogoUncheckedUpdateWithoutConsoleInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DesenvolvedorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput> | DesenvolvedorCreateWithoutAuthorInput[] | DesenvolvedorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesenvolvedorCreateOrConnectWithoutAuthorInput | DesenvolvedorCreateOrConnectWithoutAuthorInput[]
    createMany?: DesenvolvedorCreateManyAuthorInputEnvelope
    connect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
  }

  export type ConsoleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput> | ConsoleCreateWithoutAuthorInput[] | ConsoleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ConsoleCreateOrConnectWithoutAuthorInput | ConsoleCreateOrConnectWithoutAuthorInput[]
    createMany?: ConsoleCreateManyAuthorInputEnvelope
    connect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
  }

  export type DesenvolvedorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput> | DesenvolvedorCreateWithoutAuthorInput[] | DesenvolvedorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesenvolvedorCreateOrConnectWithoutAuthorInput | DesenvolvedorCreateOrConnectWithoutAuthorInput[]
    createMany?: DesenvolvedorCreateManyAuthorInputEnvelope
    connect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
  }

  export type ConsoleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput> | ConsoleCreateWithoutAuthorInput[] | ConsoleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ConsoleCreateOrConnectWithoutAuthorInput | ConsoleCreateOrConnectWithoutAuthorInput[]
    createMany?: ConsoleCreateManyAuthorInputEnvelope
    connect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
  }

  export type DesenvolvedorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput> | DesenvolvedorCreateWithoutAuthorInput[] | DesenvolvedorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesenvolvedorCreateOrConnectWithoutAuthorInput | DesenvolvedorCreateOrConnectWithoutAuthorInput[]
    upsert?: DesenvolvedorUpsertWithWhereUniqueWithoutAuthorInput | DesenvolvedorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DesenvolvedorCreateManyAuthorInputEnvelope
    set?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    disconnect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    delete?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    connect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    update?: DesenvolvedorUpdateWithWhereUniqueWithoutAuthorInput | DesenvolvedorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DesenvolvedorUpdateManyWithWhereWithoutAuthorInput | DesenvolvedorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DesenvolvedorScalarWhereInput | DesenvolvedorScalarWhereInput[]
  }

  export type ConsoleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput> | ConsoleCreateWithoutAuthorInput[] | ConsoleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ConsoleCreateOrConnectWithoutAuthorInput | ConsoleCreateOrConnectWithoutAuthorInput[]
    upsert?: ConsoleUpsertWithWhereUniqueWithoutAuthorInput | ConsoleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ConsoleCreateManyAuthorInputEnvelope
    set?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    disconnect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    delete?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    connect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    update?: ConsoleUpdateWithWhereUniqueWithoutAuthorInput | ConsoleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ConsoleUpdateManyWithWhereWithoutAuthorInput | ConsoleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ConsoleScalarWhereInput | ConsoleScalarWhereInput[]
  }

  export type DesenvolvedorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput> | DesenvolvedorCreateWithoutAuthorInput[] | DesenvolvedorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesenvolvedorCreateOrConnectWithoutAuthorInput | DesenvolvedorCreateOrConnectWithoutAuthorInput[]
    upsert?: DesenvolvedorUpsertWithWhereUniqueWithoutAuthorInput | DesenvolvedorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DesenvolvedorCreateManyAuthorInputEnvelope
    set?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    disconnect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    delete?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    connect?: DesenvolvedorWhereUniqueInput | DesenvolvedorWhereUniqueInput[]
    update?: DesenvolvedorUpdateWithWhereUniqueWithoutAuthorInput | DesenvolvedorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DesenvolvedorUpdateManyWithWhereWithoutAuthorInput | DesenvolvedorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DesenvolvedorScalarWhereInput | DesenvolvedorScalarWhereInput[]
  }

  export type ConsoleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput> | ConsoleCreateWithoutAuthorInput[] | ConsoleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ConsoleCreateOrConnectWithoutAuthorInput | ConsoleCreateOrConnectWithoutAuthorInput[]
    upsert?: ConsoleUpsertWithWhereUniqueWithoutAuthorInput | ConsoleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ConsoleCreateManyAuthorInputEnvelope
    set?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    disconnect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    delete?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    connect?: ConsoleWhereUniqueInput | ConsoleWhereUniqueInput[]
    update?: ConsoleUpdateWithWhereUniqueWithoutAuthorInput | ConsoleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ConsoleUpdateManyWithWhereWithoutAuthorInput | ConsoleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ConsoleScalarWhereInput | ConsoleScalarWhereInput[]
  }

  export type JogoCreateNestedOneWithoutDesenvolvedorInput = {
    create?: XOR<JogoCreateWithoutDesenvolvedorInput, JogoUncheckedCreateWithoutDesenvolvedorInput>
    connectOrCreate?: JogoCreateOrConnectWithoutDesenvolvedorInput
    connect?: JogoWhereUniqueInput
  }

  export type JogoUpdateOneWithoutDesenvolvedorNestedInput = {
    create?: XOR<JogoCreateWithoutDesenvolvedorInput, JogoUncheckedCreateWithoutDesenvolvedorInput>
    connectOrCreate?: JogoCreateOrConnectWithoutDesenvolvedorInput
    upsert?: JogoUpsertWithoutDesenvolvedorInput
    disconnect?: boolean
    delete?: JogoWhereInput | boolean
    connect?: JogoWhereUniqueInput
    update?: XOR<XOR<JogoUpdateToOneWithWhereWithoutDesenvolvedorInput, JogoUpdateWithoutDesenvolvedorInput>, JogoUncheckedUpdateWithoutDesenvolvedorInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type JogoCreateWithoutConsoleInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Desenvolvedor?: DesenvolvedorCreateNestedManyWithoutAuthorInput
  }

  export type JogoUncheckedCreateWithoutConsoleInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Desenvolvedor?: DesenvolvedorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type JogoCreateOrConnectWithoutConsoleInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutConsoleInput, JogoUncheckedCreateWithoutConsoleInput>
  }

  export type JogoUpsertWithoutConsoleInput = {
    update: XOR<JogoUpdateWithoutConsoleInput, JogoUncheckedUpdateWithoutConsoleInput>
    create: XOR<JogoCreateWithoutConsoleInput, JogoUncheckedCreateWithoutConsoleInput>
    where?: JogoWhereInput
  }

  export type JogoUpdateToOneWithWhereWithoutConsoleInput = {
    where?: JogoWhereInput
    data: XOR<JogoUpdateWithoutConsoleInput, JogoUncheckedUpdateWithoutConsoleInput>
  }

  export type JogoUpdateWithoutConsoleInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Desenvolvedor?: DesenvolvedorUpdateManyWithoutAuthorNestedInput
  }

  export type JogoUncheckedUpdateWithoutConsoleInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Desenvolvedor?: DesenvolvedorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DesenvolvedorCreateWithoutAuthorInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
  }

  export type DesenvolvedorUncheckedCreateWithoutAuthorInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
  }

  export type DesenvolvedorCreateOrConnectWithoutAuthorInput = {
    where: DesenvolvedorWhereUniqueInput
    create: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput>
  }

  export type DesenvolvedorCreateManyAuthorInputEnvelope = {
    data: DesenvolvedorCreateManyAuthorInput | DesenvolvedorCreateManyAuthorInput[]
  }

  export type ConsoleCreateWithoutAuthorInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
  }

  export type ConsoleUncheckedCreateWithoutAuthorInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
  }

  export type ConsoleCreateOrConnectWithoutAuthorInput = {
    where: ConsoleWhereUniqueInput
    create: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput>
  }

  export type ConsoleCreateManyAuthorInputEnvelope = {
    data: ConsoleCreateManyAuthorInput | ConsoleCreateManyAuthorInput[]
  }

  export type DesenvolvedorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DesenvolvedorWhereUniqueInput
    update: XOR<DesenvolvedorUpdateWithoutAuthorInput, DesenvolvedorUncheckedUpdateWithoutAuthorInput>
    create: XOR<DesenvolvedorCreateWithoutAuthorInput, DesenvolvedorUncheckedCreateWithoutAuthorInput>
  }

  export type DesenvolvedorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DesenvolvedorWhereUniqueInput
    data: XOR<DesenvolvedorUpdateWithoutAuthorInput, DesenvolvedorUncheckedUpdateWithoutAuthorInput>
  }

  export type DesenvolvedorUpdateManyWithWhereWithoutAuthorInput = {
    where: DesenvolvedorScalarWhereInput
    data: XOR<DesenvolvedorUpdateManyMutationInput, DesenvolvedorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DesenvolvedorScalarWhereInput = {
    AND?: DesenvolvedorScalarWhereInput | DesenvolvedorScalarWhereInput[]
    OR?: DesenvolvedorScalarWhereInput[]
    NOT?: DesenvolvedorScalarWhereInput | DesenvolvedorScalarWhereInput[]
    id?: StringFilter<"Desenvolvedor"> | string
    nome?: StringFilter<"Desenvolvedor"> | string
    dataFundacao?: StringFilter<"Desenvolvedor"> | string
    website?: StringFilter<"Desenvolvedor"> | string
    sede?: StringFilter<"Desenvolvedor"> | string
    authorId?: StringNullableFilter<"Desenvolvedor"> | string | null
  }

  export type ConsoleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ConsoleWhereUniqueInput
    update: XOR<ConsoleUpdateWithoutAuthorInput, ConsoleUncheckedUpdateWithoutAuthorInput>
    create: XOR<ConsoleCreateWithoutAuthorInput, ConsoleUncheckedCreateWithoutAuthorInput>
  }

  export type ConsoleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ConsoleWhereUniqueInput
    data: XOR<ConsoleUpdateWithoutAuthorInput, ConsoleUncheckedUpdateWithoutAuthorInput>
  }

  export type ConsoleUpdateManyWithWhereWithoutAuthorInput = {
    where: ConsoleScalarWhereInput
    data: XOR<ConsoleUpdateManyMutationInput, ConsoleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ConsoleScalarWhereInput = {
    AND?: ConsoleScalarWhereInput | ConsoleScalarWhereInput[]
    OR?: ConsoleScalarWhereInput[]
    NOT?: ConsoleScalarWhereInput | ConsoleScalarWhereInput[]
    id?: StringFilter<"Console"> | string
    codigo?: IntFilter<"Console"> | number
    nome?: StringFilter<"Console"> | string
    dataLancamento?: StringFilter<"Console"> | string
    empresa?: StringFilter<"Console"> | string
    authorId?: StringNullableFilter<"Console"> | string | null
  }

  export type JogoCreateWithoutDesenvolvedorInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Console?: ConsoleCreateNestedManyWithoutAuthorInput
  }

  export type JogoUncheckedCreateWithoutDesenvolvedorInput = {
    id?: string
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    genero: string
    urlCapas: string
    Console?: ConsoleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type JogoCreateOrConnectWithoutDesenvolvedorInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutDesenvolvedorInput, JogoUncheckedCreateWithoutDesenvolvedorInput>
  }

  export type JogoUpsertWithoutDesenvolvedorInput = {
    update: XOR<JogoUpdateWithoutDesenvolvedorInput, JogoUncheckedUpdateWithoutDesenvolvedorInput>
    create: XOR<JogoCreateWithoutDesenvolvedorInput, JogoUncheckedCreateWithoutDesenvolvedorInput>
    where?: JogoWhereInput
  }

  export type JogoUpdateToOneWithWhereWithoutDesenvolvedorInput = {
    where?: JogoWhereInput
    data: XOR<JogoUpdateWithoutDesenvolvedorInput, JogoUncheckedUpdateWithoutDesenvolvedorInput>
  }

  export type JogoUpdateWithoutDesenvolvedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Console?: ConsoleUpdateManyWithoutAuthorNestedInput
  }

  export type JogoUncheckedUpdateWithoutDesenvolvedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    urlCapas?: StringFieldUpdateOperationsInput | string
    Console?: ConsoleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DesenvolvedorCreateManyAuthorInput = {
    id?: string
    nome: string
    dataFundacao: string
    website: string
    sede: string
  }

  export type ConsoleCreateManyAuthorInput = {
    id?: string
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
  }

  export type DesenvolvedorUpdateWithoutAuthorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
  }

  export type DesenvolvedorUncheckedUpdateWithoutAuthorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
  }

  export type DesenvolvedorUncheckedUpdateManyWithoutAuthorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataFundacao?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUpdateWithoutAuthorInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUncheckedUpdateWithoutAuthorInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUncheckedUpdateManyWithoutAuthorInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataLancamento?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use JogoCountOutputTypeDefaultArgs instead
     */
    export type JogoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = JogoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsoleDefaultArgs instead
     */
    export type ConsoleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConsoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JogoDefaultArgs instead
     */
    export type JogoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = JogoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DesenvolvedorDefaultArgs instead
     */
    export type DesenvolvedorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DesenvolvedorDefaultArgs<ExtArgs>

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