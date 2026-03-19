
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
 * Model Customers
 * 
 */
export type Customers = $Result.DefaultSelection<Prisma.$CustomersPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductDetails
 * 
 */
export type ProductDetails = $Result.DefaultSelection<Prisma.$ProductDetailsPayload>
/**
 * Model ProductStock
 * 
 */
export type ProductStock = $Result.DefaultSelection<Prisma.$ProductStockPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItems
 * 
 */
export type CartItems = $Result.DefaultSelection<Prisma.$CartItemsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
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
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDetails`: Exposes CRUD operations for the **ProductDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDetails
    * const productDetails = await prisma.productDetails.findMany()
    * ```
    */
  get productDetails(): Prisma.ProductDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productStock`: Exposes CRUD operations for the **ProductStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductStocks
    * const productStocks = await prisma.productStock.findMany()
    * ```
    */
  get productStock(): Prisma.ProductStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItems`: Exposes CRUD operations for the **CartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItems.findMany()
    * ```
    */
  get cartItems(): Prisma.CartItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Customers: 'Customers',
    Address: 'Address',
    Region: 'Region',
    Branch: 'Branch',
    Warehouse: 'Warehouse',
    Employees: 'Employees',
    Categories: 'Categories',
    Products: 'Products',
    ProductDetails: 'ProductDetails',
    ProductStock: 'ProductStock',
    Comments: 'Comments',
    Cart: 'Cart',
    CartItems: 'CartItems',
    Orders: 'Orders',
    OrderDetails: 'OrderDetails'
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
      modelProps: "customers" | "address" | "region" | "branch" | "warehouse" | "employees" | "categories" | "products" | "productDetails" | "productStock" | "comments" | "cart" | "cartItems" | "orders" | "orderDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customers: {
        payload: Prisma.$CustomersPayload<ExtArgs>
        fields: Prisma.CustomersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductDetails: {
        payload: Prisma.$ProductDetailsPayload<ExtArgs>
        fields: Prisma.ProductDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          findFirst: {
            args: Prisma.ProductDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          findMany: {
            args: Prisma.ProductDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>[]
          }
          create: {
            args: Prisma.ProductDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          createMany: {
            args: Prisma.ProductDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          update: {
            args: Prisma.ProductDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ProductDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDetailsPayload>
          }
          aggregate: {
            args: Prisma.ProductDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDetails>
          }
          groupBy: {
            args: Prisma.ProductDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDetailsCountAggregateOutputType> | number
          }
        }
      }
      ProductStock: {
        payload: Prisma.$ProductStockPayload<ExtArgs>
        fields: Prisma.ProductStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findFirst: {
            args: Prisma.ProductStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findMany: {
            args: Prisma.ProductStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          create: {
            args: Prisma.ProductStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          createMany: {
            args: Prisma.ProductStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          update: {
            args: Prisma.ProductStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          deleteMany: {
            args: Prisma.ProductStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          aggregate: {
            args: Prisma.ProductStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductStock>
          }
          groupBy: {
            args: Prisma.ProductStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductStockCountArgs<ExtArgs>
            result: $Utils.Optional<ProductStockCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItems: {
        payload: Prisma.$CartItemsPayload<ExtArgs>
        fields: Prisma.CartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findFirst: {
            args: Prisma.CartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findMany: {
            args: Prisma.CartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          create: {
            args: Prisma.CartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          createMany: {
            args: Prisma.CartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          update: {
            args: Prisma.CartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          deleteMany: {
            args: Prisma.CartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          aggregate: {
            args: Prisma.CartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItems>
          }
          groupBy: {
            args: Prisma.CartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    customers?: CustomersOmit
    address?: AddressOmit
    region?: RegionOmit
    branch?: BranchOmit
    warehouse?: WarehouseOmit
    employees?: EmployeesOmit
    categories?: CategoriesOmit
    products?: ProductsOmit
    productDetails?: ProductDetailsOmit
    productStock?: ProductStockOmit
    comments?: CommentsOmit
    cart?: CartOmit
    cartItems?: CartItemsOmit
    orders?: OrdersOmit
    orderDetails?: OrderDetailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
    comments: number
    addresses: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
    comments?: boolean | CustomersCountOutputTypeCountCommentsArgs
    addresses?: boolean | CustomersCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    branch: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | RegionCountOutputTypeCountBranchArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    warehouse: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | BranchCountOutputTypeCountWarehouseArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    stocks: number
    employee: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | WarehouseCountOutputTypeCountStocksArgs
    employee?: boolean | WarehouseCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    productTypes: number
    comments: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productTypes?: boolean | ProductsCountOutputTypeCountProductTypesArgs
    comments?: boolean | ProductsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDetailsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Count Type ProductDetailsCountOutputType
   */

  export type ProductDetailsCountOutputType = {
    productStock: number
    orderDetail: number
    cartItems: number
  }

  export type ProductDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productStock?: boolean | ProductDetailsCountOutputTypeCountProductStockArgs
    orderDetail?: boolean | ProductDetailsCountOutputTypeCountOrderDetailArgs
    cartItems?: boolean | ProductDetailsCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductDetailsCountOutputType without action
   */
  export type ProductDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetailsCountOutputType
     */
    select?: ProductDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductDetailsCountOutputType without action
   */
  export type ProductDetailsCountOutputTypeCountProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * ProductDetailsCountOutputType without action
   */
  export type ProductDetailsCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }

  /**
   * ProductDetailsCountOutputType without action
   */
  export type ProductDetailsCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderDetails: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrdersCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    status: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: CustomersOrderByWithAggregationInput | CustomersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    password: string | null
    status: number | null
    createdAt: Date
    updateAt: Date | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
    orders?: boolean | Customers$ordersArgs<ExtArgs>
    comments?: boolean | Customers$commentsArgs<ExtArgs>
    cart?: boolean | Customers$cartArgs<ExtArgs>
    addresses?: boolean | Customers$addressesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>



  export type CustomersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type CustomersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "status" | "createdAt" | "updateAt", ExtArgs["result"]["customers"]>
  export type CustomersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customers$ordersArgs<ExtArgs>
    comments?: boolean | Customers$commentsArgs<ExtArgs>
    cart?: boolean | Customers$cartArgs<ExtArgs>
    addresses?: boolean | Customers$addressesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customers"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
      addresses: Prisma.$AddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      password: string | null
      status: number | null
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type CustomersGetPayload<S extends boolean | null | undefined | CustomersDefaultArgs> = $Result.GetResult<Prisma.$CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomersFindUniqueArgs>(args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomersFindFirstArgs>(args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomersFindManyArgs>(args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends CustomersCreateArgs>(args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomersCreateManyArgs>(args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends CustomersDeleteArgs>(args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomersUpdateArgs>(args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomersDeleteManyArgs>(args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomersUpdateManyArgs>(args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends CustomersUpsertArgs>(args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
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
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customers model
   */
  readonly fields: CustomersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Customers$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Customers$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends Customers$cartArgs<ExtArgs> = {}>(args?: Subset<T, Customers$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addresses<T extends Customers$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Customers$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customers model
   */
  interface CustomersFieldRefs {
    readonly id: FieldRef<"Customers", 'Int'>
    readonly name: FieldRef<"Customers", 'String'>
    readonly email: FieldRef<"Customers", 'String'>
    readonly phone: FieldRef<"Customers", 'String'>
    readonly password: FieldRef<"Customers", 'String'>
    readonly status: FieldRef<"Customers", 'Int'>
    readonly createdAt: FieldRef<"Customers", 'DateTime'>
    readonly updateAt: FieldRef<"Customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customers findUnique
   */
  export type CustomersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findFirst
   */
  export type CustomersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }

  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }

  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customers.orders
   */
  export type Customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Customers.comments
   */
  export type Customers$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Customers.cart
   */
  export type Customers$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * Customers.addresses
   */
  export type Customers$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Customers without action
   */
  export type CustomersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    city: string | null
    district: string | null
    ward: string | null
    street: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    city: string | null
    district: string | null
    ward: string | null
    street: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    customerId: number
    city: number
    district: number
    ward: number
    street: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    customerId?: true
    city?: true
    district?: true
    ward?: true
    street?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    customerId?: true
    city?: true
    district?: true
    ward?: true
    street?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    customerId?: true
    city?: true
    district?: true
    ward?: true
    street?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    customerId: number
    city: string
    district: string
    ward: string
    street: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    city?: boolean
    district?: boolean
    ward?: boolean
    street?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    customerId?: boolean
    city?: boolean
    district?: boolean
    ward?: boolean
    street?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "city" | "district" | "ward" | "street", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      city: string
      district: string
      ward: string
      street: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly customerId: FieldRef<"Address", 'Int'>
    readonly city: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly ward: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean | Region$branchArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>



  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Region$branchArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Region$branchArgs<ExtArgs> = {}>(args?: Subset<T, Region$branchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.branch
   */
  export type Region$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type BranchSumAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    regionId: number | null
  }

  export type BranchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    regionId: number | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    regionId: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type BranchSumAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    regionId?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    regionId?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    regionId?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: number
    name: string
    address: string
    regionId: number
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    regionId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    warehouse?: boolean | Branch$warehouseArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>



  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    regionId?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "regionId", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    warehouse?: boolean | Branch$warehouseArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      regionId: number
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends Branch$warehouseArgs<ExtArgs> = {}>(args?: Subset<T, Branch$warehouseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'Int'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly regionId: FieldRef<"Branch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.warehouse
   */
  export type Branch$warehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    branchId: number | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    branchId: number | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    branchId: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    branchId: number
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    stocks?: boolean | Warehouse$stocksArgs<ExtArgs>
    employee?: boolean | Warehouse$employeeArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>



  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    branchId?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branchId", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    stocks?: boolean | Warehouse$stocksArgs<ExtArgs>
    employee?: boolean | Warehouse$employeeArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      stocks: Prisma.$ProductStockPayload<ExtArgs>[]
      employee: Prisma.$EmployeesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      branchId: number
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stocks<T extends Warehouse$stocksArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends Warehouse$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly branchId: FieldRef<"Warehouse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.stocks
   */
  export type Warehouse$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * Warehouse.employee
   */
  export type Warehouse$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    cursor?: EmployeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    status: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    status: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    warehouseId: number
    name: number
    email: number
    phone: number
    password: number
    status: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
    warehouseId?: true
    status?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
    warehouseId?: true
    status?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    warehouseId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    warehouseId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    warehouseId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: number
    warehouseId: number
    name: string
    email: string
    phone: string | null
    password: string
    status: number | null
    createdAt: Date
    updateAt: Date | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>



  export type EmployeesSelectScalar = {
    id?: boolean
    warehouseId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "warehouseId" | "name" | "email" | "phone" | "password" | "status" | "createdAt" | "updateAt", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      warehouseId: number
      name: string
      email: string
      phone: string | null
      password: string
      status: number | null
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeesFindUniqueArgs>(args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeesFindFirstArgs>(args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeesFindManyArgs>(args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends EmployeesCreateArgs>(args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeesCreateManyArgs>(args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends EmployeesDeleteArgs>(args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeesUpdateArgs>(args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeesDeleteManyArgs>(args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeesUpdateManyArgs>(args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends EmployeesUpsertArgs>(args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
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
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Employees model
   */
  interface EmployeesFieldRefs {
    readonly id: FieldRef<"Employees", 'Int'>
    readonly warehouseId: FieldRef<"Employees", 'Int'>
    readonly name: FieldRef<"Employees", 'String'>
    readonly email: FieldRef<"Employees", 'String'>
    readonly phone: FieldRef<"Employees", 'String'>
    readonly password: FieldRef<"Employees", 'String'>
    readonly status: FieldRef<"Employees", 'Int'>
    readonly createdAt: FieldRef<"Employees", 'DateTime'>
    readonly updateAt: FieldRef<"Employees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }

  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }

  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    hot: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    status: number | null
    hot: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: number | null
    hot: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: number | null
    hot: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    hot: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    status?: true
    hot?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    status?: true
    hot?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    hot?: true
    createdAt?: true
    updateAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    hot?: true
    createdAt?: true
    updateAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    hot?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
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
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string
    status: number
    hot: number
    createdAt: Date
    updateAt: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    hot?: boolean
    createdAt?: boolean
    updateAt?: boolean
    products?: boolean | Categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    hot?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "hot" | "createdAt" | "updateAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      status: number
      hot: number
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly status: FieldRef<"Categories", 'Int'>
    readonly hot: FieldRef<"Categories", 'Int'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updateAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.products
   */
  export type Categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    rate: number | null
    countRate: number | null
    purchases: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    rate: number | null
    countRate: number | null
    purchases: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    rate: number | null
    countRate: number | null
    purchases: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    rate: number | null
    countRate: number | null
    purchases: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    description: number
    rate: number
    countRate: number
    purchases: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    rate?: true
    countRate?: true
    purchases?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    categoryId?: true
    rate?: true
    countRate?: true
    purchases?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    description?: true
    rate?: true
    countRate?: true
    purchases?: true
    createdAt?: true
    updateAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    description?: true
    rate?: true
    countRate?: true
    purchases?: true
    createdAt?: true
    updateAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    description?: true
    rate?: true
    countRate?: true
    purchases?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    categoryId: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt: Date
    updateAt: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    rate?: boolean
    countRate?: boolean
    purchases?: boolean
    createdAt?: boolean
    updateAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    productTypes?: boolean | Products$productTypesArgs<ExtArgs>
    comments?: boolean | Products$commentsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type ProductsSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    rate?: boolean
    countRate?: boolean
    purchases?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "description" | "rate" | "countRate" | "purchases" | "createdAt" | "updateAt", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    productTypes?: boolean | Products$productTypesArgs<ExtArgs>
    comments?: boolean | Products$commentsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      productTypes: Prisma.$ProductDetailsPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      name: string
      description: string
      rate: number
      countRate: number
      purchases: number
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productTypes<T extends Products$productTypesArgs<ExtArgs> = {}>(args?: Subset<T, Products$productTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Products$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Products$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly categoryId: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly rate: FieldRef<"Products", 'Int'>
    readonly countRate: FieldRef<"Products", 'Int'>
    readonly purchases: FieldRef<"Products", 'Int'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updateAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.productTypes
   */
  export type Products$productTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    where?: ProductDetailsWhereInput
    orderBy?: ProductDetailsOrderByWithRelationInput | ProductDetailsOrderByWithRelationInput[]
    cursor?: ProductDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDetailsScalarFieldEnum | ProductDetailsScalarFieldEnum[]
  }

  /**
   * Products.comments
   */
  export type Products$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductDetails
   */

  export type AggregateProductDetails = {
    _count: ProductDetailsCountAggregateOutputType | null
    _avg: ProductDetailsAvgAggregateOutputType | null
    _sum: ProductDetailsSumAggregateOutputType | null
    _min: ProductDetailsMinAggregateOutputType | null
    _max: ProductDetailsMaxAggregateOutputType | null
  }

  export type ProductDetailsAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    color: number | null
    size: number | null
    price: number | null
    status: number | null
  }

  export type ProductDetailsSumAggregateOutputType = {
    id: number | null
    productId: number | null
    color: number | null
    size: number | null
    price: number | null
    status: number | null
  }

  export type ProductDetailsMinAggregateOutputType = {
    id: number | null
    productId: number | null
    color: number | null
    size: number | null
    price: number | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ProductDetailsMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    color: number | null
    size: number | null
    price: number | null
    status: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ProductDetailsCountAggregateOutputType = {
    id: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ProductDetailsAvgAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    price?: true
    status?: true
  }

  export type ProductDetailsSumAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    price?: true
    status?: true
  }

  export type ProductDetailsMinAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    price?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type ProductDetailsMaxAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    price?: true
    status?: true
    createdAt?: true
    updateAt?: true
  }

  export type ProductDetailsCountAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    price?: true
    status?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetails to aggregate.
     */
    where?: ProductDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailsOrderByWithRelationInput | ProductDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDetails
    **/
    _count?: true | ProductDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDetailsMaxAggregateInputType
  }

  export type GetProductDetailsAggregateType<T extends ProductDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDetails[P]>
      : GetScalarType<T[P], AggregateProductDetails[P]>
  }




  export type ProductDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDetailsWhereInput
    orderBy?: ProductDetailsOrderByWithAggregationInput | ProductDetailsOrderByWithAggregationInput[]
    by: ProductDetailsScalarFieldEnum[] | ProductDetailsScalarFieldEnum
    having?: ProductDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDetailsCountAggregateInputType | true
    _avg?: ProductDetailsAvgAggregateInputType
    _sum?: ProductDetailsSumAggregateInputType
    _min?: ProductDetailsMinAggregateInputType
    _max?: ProductDetailsMaxAggregateInputType
  }

  export type ProductDetailsGroupByOutputType = {
    id: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt: Date
    updateAt: Date | null
    _count: ProductDetailsCountAggregateOutputType | null
    _avg: ProductDetailsAvgAggregateOutputType | null
    _sum: ProductDetailsSumAggregateOutputType | null
    _min: ProductDetailsMinAggregateOutputType | null
    _max: ProductDetailsMaxAggregateOutputType | null
  }

  type GetProductDetailsGroupByPayload<T extends ProductDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ProductDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    productStock?: boolean | ProductDetails$productStockArgs<ExtArgs>
    orderDetail?: boolean | ProductDetails$orderDetailArgs<ExtArgs>
    cartItems?: boolean | ProductDetails$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDetails"]>



  export type ProductDetailsSelectScalar = {
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ProductDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "color" | "size" | "price" | "status" | "createdAt" | "updateAt", ExtArgs["result"]["productDetails"]>
  export type ProductDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    productStock?: boolean | ProductDetails$productStockArgs<ExtArgs>
    orderDetail?: boolean | ProductDetails$orderDetailArgs<ExtArgs>
    cartItems?: boolean | ProductDetails$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDetails"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      productStock: Prisma.$ProductStockPayload<ExtArgs>[]
      orderDetail: Prisma.$OrderDetailsPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      color: number
      size: number
      price: number
      status: number
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["productDetails"]>
    composites: {}
  }

  type ProductDetailsGetPayload<S extends boolean | null | undefined | ProductDetailsDefaultArgs> = $Result.GetResult<Prisma.$ProductDetailsPayload, S>

  type ProductDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDetailsCountAggregateInputType | true
    }

  export interface ProductDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDetails'], meta: { name: 'ProductDetails' } }
    /**
     * Find zero or one ProductDetails that matches the filter.
     * @param {ProductDetailsFindUniqueArgs} args - Arguments to find a ProductDetails
     * @example
     * // Get one ProductDetails
     * const productDetails = await prisma.productDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDetailsFindUniqueArgs>(args: SelectSubset<T, ProductDetailsFindUniqueArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDetailsFindUniqueOrThrowArgs} args - Arguments to find a ProductDetails
     * @example
     * // Get one ProductDetails
     * const productDetails = await prisma.productDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsFindFirstArgs} args - Arguments to find a ProductDetails
     * @example
     * // Get one ProductDetails
     * const productDetails = await prisma.productDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDetailsFindFirstArgs>(args?: SelectSubset<T, ProductDetailsFindFirstArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsFindFirstOrThrowArgs} args - Arguments to find a ProductDetails
     * @example
     * // Get one ProductDetails
     * const productDetails = await prisma.productDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDetails
     * const productDetails = await prisma.productDetails.findMany()
     * 
     * // Get first 10 ProductDetails
     * const productDetails = await prisma.productDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDetailsWithIdOnly = await prisma.productDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductDetailsFindManyArgs>(args?: SelectSubset<T, ProductDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductDetails.
     * @param {ProductDetailsCreateArgs} args - Arguments to create a ProductDetails.
     * @example
     * // Create one ProductDetails
     * const ProductDetails = await prisma.productDetails.create({
     *   data: {
     *     // ... data to create a ProductDetails
     *   }
     * })
     * 
     */
    create<T extends ProductDetailsCreateArgs>(args: SelectSubset<T, ProductDetailsCreateArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductDetails.
     * @param {ProductDetailsCreateManyArgs} args - Arguments to create many ProductDetails.
     * @example
     * // Create many ProductDetails
     * const productDetails = await prisma.productDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDetailsCreateManyArgs>(args?: SelectSubset<T, ProductDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductDetails.
     * @param {ProductDetailsDeleteArgs} args - Arguments to delete one ProductDetails.
     * @example
     * // Delete one ProductDetails
     * const ProductDetails = await prisma.productDetails.delete({
     *   where: {
     *     // ... filter to delete one ProductDetails
     *   }
     * })
     * 
     */
    delete<T extends ProductDetailsDeleteArgs>(args: SelectSubset<T, ProductDetailsDeleteArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductDetails.
     * @param {ProductDetailsUpdateArgs} args - Arguments to update one ProductDetails.
     * @example
     * // Update one ProductDetails
     * const productDetails = await prisma.productDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDetailsUpdateArgs>(args: SelectSubset<T, ProductDetailsUpdateArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductDetails.
     * @param {ProductDetailsDeleteManyArgs} args - Arguments to filter ProductDetails to delete.
     * @example
     * // Delete a few ProductDetails
     * const { count } = await prisma.productDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDetailsDeleteManyArgs>(args?: SelectSubset<T, ProductDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDetails
     * const productDetails = await prisma.productDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDetailsUpdateManyArgs>(args: SelectSubset<T, ProductDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductDetails.
     * @param {ProductDetailsUpsertArgs} args - Arguments to update or create a ProductDetails.
     * @example
     * // Update or create a ProductDetails
     * const productDetails = await prisma.productDetails.upsert({
     *   create: {
     *     // ... data to create a ProductDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDetails we want to update
     *   }
     * })
     */
    upsert<T extends ProductDetailsUpsertArgs>(args: SelectSubset<T, ProductDetailsUpsertArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsCountArgs} args - Arguments to filter ProductDetails to count.
     * @example
     * // Count the number of ProductDetails
     * const count = await prisma.productDetails.count({
     *   where: {
     *     // ... the filter for the ProductDetails we want to count
     *   }
     * })
    **/
    count<T extends ProductDetailsCountArgs>(
      args?: Subset<T, ProductDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductDetailsAggregateArgs>(args: Subset<T, ProductDetailsAggregateArgs>): Prisma.PrismaPromise<GetProductDetailsAggregateType<T>>

    /**
     * Group by ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailsGroupByArgs} args - Group by arguments.
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
      T extends ProductDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ProductDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDetails model
   */
  readonly fields: ProductDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productStock<T extends ProductDetails$productStockArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetails$productStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderDetail<T extends ProductDetails$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetails$orderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends ProductDetails$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetails$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductDetails model
   */
  interface ProductDetailsFieldRefs {
    readonly id: FieldRef<"ProductDetails", 'Int'>
    readonly productId: FieldRef<"ProductDetails", 'Int'>
    readonly color: FieldRef<"ProductDetails", 'Int'>
    readonly size: FieldRef<"ProductDetails", 'Int'>
    readonly price: FieldRef<"ProductDetails", 'Int'>
    readonly status: FieldRef<"ProductDetails", 'Int'>
    readonly createdAt: FieldRef<"ProductDetails", 'DateTime'>
    readonly updateAt: FieldRef<"ProductDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductDetails findUnique
   */
  export type ProductDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where: ProductDetailsWhereUniqueInput
  }

  /**
   * ProductDetails findUniqueOrThrow
   */
  export type ProductDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where: ProductDetailsWhereUniqueInput
  }

  /**
   * ProductDetails findFirst
   */
  export type ProductDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where?: ProductDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailsOrderByWithRelationInput | ProductDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailsScalarFieldEnum | ProductDetailsScalarFieldEnum[]
  }

  /**
   * ProductDetails findFirstOrThrow
   */
  export type ProductDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where?: ProductDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailsOrderByWithRelationInput | ProductDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailsScalarFieldEnum | ProductDetailsScalarFieldEnum[]
  }

  /**
   * ProductDetails findMany
   */
  export type ProductDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where?: ProductDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailsOrderByWithRelationInput | ProductDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDetails.
     */
    cursor?: ProductDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    distinct?: ProductDetailsScalarFieldEnum | ProductDetailsScalarFieldEnum[]
  }

  /**
   * ProductDetails create
   */
  export type ProductDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDetails.
     */
    data: XOR<ProductDetailsCreateInput, ProductDetailsUncheckedCreateInput>
  }

  /**
   * ProductDetails createMany
   */
  export type ProductDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDetails.
     */
    data: ProductDetailsCreateManyInput | ProductDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductDetails update
   */
  export type ProductDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDetails.
     */
    data: XOR<ProductDetailsUpdateInput, ProductDetailsUncheckedUpdateInput>
    /**
     * Choose, which ProductDetails to update.
     */
    where: ProductDetailsWhereUniqueInput
  }

  /**
   * ProductDetails updateMany
   */
  export type ProductDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDetails.
     */
    data: XOR<ProductDetailsUpdateManyMutationInput, ProductDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProductDetails to update
     */
    where?: ProductDetailsWhereInput
    /**
     * Limit how many ProductDetails to update.
     */
    limit?: number
  }

  /**
   * ProductDetails upsert
   */
  export type ProductDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDetails to update in case it exists.
     */
    where: ProductDetailsWhereUniqueInput
    /**
     * In case the ProductDetails found by the `where` argument doesn't exist, create a new ProductDetails with this data.
     */
    create: XOR<ProductDetailsCreateInput, ProductDetailsUncheckedCreateInput>
    /**
     * In case the ProductDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDetailsUpdateInput, ProductDetailsUncheckedUpdateInput>
  }

  /**
   * ProductDetails delete
   */
  export type ProductDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
    /**
     * Filter which ProductDetails to delete.
     */
    where: ProductDetailsWhereUniqueInput
  }

  /**
   * ProductDetails deleteMany
   */
  export type ProductDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetails to delete
     */
    where?: ProductDetailsWhereInput
    /**
     * Limit how many ProductDetails to delete.
     */
    limit?: number
  }

  /**
   * ProductDetails.productStock
   */
  export type ProductDetails$productStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductDetails.orderDetail
   */
  export type ProductDetails$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * ProductDetails.cartItems
   */
  export type ProductDetails$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * ProductDetails without action
   */
  export type ProductDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetails
     */
    select?: ProductDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDetails
     */
    omit?: ProductDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDetailsInclude<ExtArgs> | null
  }


  /**
   * Model ProductStock
   */

  export type AggregateProductStock = {
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  export type ProductStockAvgAggregateOutputType = {
    id: number | null
    productDetailId: number | null
    warehouseId: number | null
    quantity: number | null
  }

  export type ProductStockSumAggregateOutputType = {
    id: number | null
    productDetailId: number | null
    warehouseId: number | null
    quantity: number | null
  }

  export type ProductStockMinAggregateOutputType = {
    id: number | null
    productDetailId: number | null
    warehouseId: number | null
    quantity: number | null
  }

  export type ProductStockMaxAggregateOutputType = {
    id: number | null
    productDetailId: number | null
    warehouseId: number | null
    quantity: number | null
  }

  export type ProductStockCountAggregateOutputType = {
    id: number
    productDetailId: number
    warehouseId: number
    quantity: number
    _all: number
  }


  export type ProductStockAvgAggregateInputType = {
    id?: true
    productDetailId?: true
    warehouseId?: true
    quantity?: true
  }

  export type ProductStockSumAggregateInputType = {
    id?: true
    productDetailId?: true
    warehouseId?: true
    quantity?: true
  }

  export type ProductStockMinAggregateInputType = {
    id?: true
    productDetailId?: true
    warehouseId?: true
    quantity?: true
  }

  export type ProductStockMaxAggregateInputType = {
    id?: true
    productDetailId?: true
    warehouseId?: true
    quantity?: true
  }

  export type ProductStockCountAggregateInputType = {
    id?: true
    productDetailId?: true
    warehouseId?: true
    quantity?: true
    _all?: true
  }

  export type ProductStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStock to aggregate.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductStocks
    **/
    _count?: true | ProductStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductStockMaxAggregateInputType
  }

  export type GetProductStockAggregateType<T extends ProductStockAggregateArgs> = {
        [P in keyof T & keyof AggregateProductStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductStock[P]>
      : GetScalarType<T[P], AggregateProductStock[P]>
  }




  export type ProductStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithAggregationInput | ProductStockOrderByWithAggregationInput[]
    by: ProductStockScalarFieldEnum[] | ProductStockScalarFieldEnum
    having?: ProductStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductStockCountAggregateInputType | true
    _avg?: ProductStockAvgAggregateInputType
    _sum?: ProductStockSumAggregateInputType
    _min?: ProductStockMinAggregateInputType
    _max?: ProductStockMaxAggregateInputType
  }

  export type ProductStockGroupByOutputType = {
    id: number
    productDetailId: number
    warehouseId: number
    quantity: number
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  type GetProductStockGroupByPayload<T extends ProductStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
            : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
        }
      >
    >


  export type ProductStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productDetailId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>



  export type ProductStockSelectScalar = {
    id?: boolean
    productDetailId?: boolean
    warehouseId?: boolean
    quantity?: boolean
  }

  export type ProductStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productDetailId" | "warehouseId" | "quantity", ExtArgs["result"]["productStock"]>
  export type ProductStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $ProductStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductStock"
    objects: {
      productDetail: Prisma.$ProductDetailsPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productDetailId: number
      warehouseId: number
      quantity: number
    }, ExtArgs["result"]["productStock"]>
    composites: {}
  }

  type ProductStockGetPayload<S extends boolean | null | undefined | ProductStockDefaultArgs> = $Result.GetResult<Prisma.$ProductStockPayload, S>

  type ProductStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductStockCountAggregateInputType | true
    }

  export interface ProductStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductStock'], meta: { name: 'ProductStock' } }
    /**
     * Find zero or one ProductStock that matches the filter.
     * @param {ProductStockFindUniqueArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductStockFindUniqueArgs>(args: SelectSubset<T, ProductStockFindUniqueArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductStockFindUniqueOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductStockFindFirstArgs>(args?: SelectSubset<T, ProductStockFindFirstArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductStocks
     * const productStocks = await prisma.productStock.findMany()
     * 
     * // Get first 10 ProductStocks
     * const productStocks = await prisma.productStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productStockWithIdOnly = await prisma.productStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductStockFindManyArgs>(args?: SelectSubset<T, ProductStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductStock.
     * @param {ProductStockCreateArgs} args - Arguments to create a ProductStock.
     * @example
     * // Create one ProductStock
     * const ProductStock = await prisma.productStock.create({
     *   data: {
     *     // ... data to create a ProductStock
     *   }
     * })
     * 
     */
    create<T extends ProductStockCreateArgs>(args: SelectSubset<T, ProductStockCreateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductStocks.
     * @param {ProductStockCreateManyArgs} args - Arguments to create many ProductStocks.
     * @example
     * // Create many ProductStocks
     * const productStock = await prisma.productStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductStockCreateManyArgs>(args?: SelectSubset<T, ProductStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductStock.
     * @param {ProductStockDeleteArgs} args - Arguments to delete one ProductStock.
     * @example
     * // Delete one ProductStock
     * const ProductStock = await prisma.productStock.delete({
     *   where: {
     *     // ... filter to delete one ProductStock
     *   }
     * })
     * 
     */
    delete<T extends ProductStockDeleteArgs>(args: SelectSubset<T, ProductStockDeleteArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductStock.
     * @param {ProductStockUpdateArgs} args - Arguments to update one ProductStock.
     * @example
     * // Update one ProductStock
     * const productStock = await prisma.productStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductStockUpdateArgs>(args: SelectSubset<T, ProductStockUpdateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductStocks.
     * @param {ProductStockDeleteManyArgs} args - Arguments to filter ProductStocks to delete.
     * @example
     * // Delete a few ProductStocks
     * const { count } = await prisma.productStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductStockDeleteManyArgs>(args?: SelectSubset<T, ProductStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductStocks
     * const productStock = await prisma.productStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductStockUpdateManyArgs>(args: SelectSubset<T, ProductStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductStock.
     * @param {ProductStockUpsertArgs} args - Arguments to update or create a ProductStock.
     * @example
     * // Update or create a ProductStock
     * const productStock = await prisma.productStock.upsert({
     *   create: {
     *     // ... data to create a ProductStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductStock we want to update
     *   }
     * })
     */
    upsert<T extends ProductStockUpsertArgs>(args: SelectSubset<T, ProductStockUpsertArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockCountArgs} args - Arguments to filter ProductStocks to count.
     * @example
     * // Count the number of ProductStocks
     * const count = await prisma.productStock.count({
     *   where: {
     *     // ... the filter for the ProductStocks we want to count
     *   }
     * })
    **/
    count<T extends ProductStockCountArgs>(
      args?: Subset<T, ProductStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductStockAggregateArgs>(args: Subset<T, ProductStockAggregateArgs>): Prisma.PrismaPromise<GetProductStockAggregateType<T>>

    /**
     * Group by ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockGroupByArgs} args - Group by arguments.
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
      T extends ProductStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductStockGroupByArgs['orderBy'] }
        : { orderBy?: ProductStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductStock model
   */
  readonly fields: ProductStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productDetail<T extends ProductDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetailsDefaultArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductStock model
   */
  interface ProductStockFieldRefs {
    readonly id: FieldRef<"ProductStock", 'Int'>
    readonly productDetailId: FieldRef<"ProductStock", 'Int'>
    readonly warehouseId: FieldRef<"ProductStock", 'Int'>
    readonly quantity: FieldRef<"ProductStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductStock findUnique
   */
  export type ProductStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findUniqueOrThrow
   */
  export type ProductStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findFirst
   */
  export type ProductStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findFirstOrThrow
   */
  export type ProductStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findMany
   */
  export type ProductStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStocks to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock create
   */
  export type ProductStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductStock.
     */
    data: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
  }

  /**
   * ProductStock createMany
   */
  export type ProductStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductStocks.
     */
    data: ProductStockCreateManyInput | ProductStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductStock update
   */
  export type ProductStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductStock.
     */
    data: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
    /**
     * Choose, which ProductStock to update.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock updateMany
   */
  export type ProductStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductStocks.
     */
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyInput>
    /**
     * Filter which ProductStocks to update
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to update.
     */
    limit?: number
  }

  /**
   * ProductStock upsert
   */
  export type ProductStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductStock to update in case it exists.
     */
    where: ProductStockWhereUniqueInput
    /**
     * In case the ProductStock found by the `where` argument doesn't exist, create a new ProductStock with this data.
     */
    create: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
    /**
     * In case the ProductStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
  }

  /**
   * ProductStock delete
   */
  export type ProductStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter which ProductStock to delete.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock deleteMany
   */
  export type ProductStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStocks to delete
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to delete.
     */
    limit?: number
  }

  /**
   * ProductStock without action
   */
  export type ProductStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    content: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    content: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    content: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    content?: true
    createdAt?: true
    updateAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    content?: true
    createdAt?: true
    updateAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    content?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    userId: number
    productId: number
    content: string
    createdAt: Date
    updateAt: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "content" | "createdAt" | "updateAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      user: Prisma.$CustomersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      content: string
      createdAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly productId: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updateAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    customerId: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    customerId?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    customerId: number
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    id?: boolean
    customerId?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
      items: Prisma.$CartItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly customerId: FieldRef<"Cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItems
   */

  export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  export type CartItemsAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    productDetailId: number | null
    quantity: number | null
  }

  export type CartItemsSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    productDetailId: number | null
    quantity: number | null
  }

  export type CartItemsMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    productDetailId: number | null
    quantity: number | null
  }

  export type CartItemsMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    productDetailId: number | null
    quantity: number | null
  }

  export type CartItemsCountAggregateOutputType = {
    id: number
    cartId: number
    productDetailId: number
    quantity: number
    _all: number
  }


  export type CartItemsAvgAggregateInputType = {
    id?: true
    cartId?: true
    productDetailId?: true
    quantity?: true
  }

  export type CartItemsSumAggregateInputType = {
    id?: true
    cartId?: true
    productDetailId?: true
    quantity?: true
  }

  export type CartItemsMinAggregateInputType = {
    id?: true
    cartId?: true
    productDetailId?: true
    quantity?: true
  }

  export type CartItemsMaxAggregateInputType = {
    id?: true
    cartId?: true
    productDetailId?: true
    quantity?: true
  }

  export type CartItemsCountAggregateInputType = {
    id?: true
    cartId?: true
    productDetailId?: true
    quantity?: true
    _all?: true
  }

  export type CartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to aggregate.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemsMaxAggregateInputType
  }

  export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItems[P]>
      : GetScalarType<T[P], AggregateCartItems[P]>
  }




  export type CartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithAggregationInput | CartItemsOrderByWithAggregationInput[]
    by: CartItemsScalarFieldEnum[] | CartItemsScalarFieldEnum
    having?: CartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemsCountAggregateInputType | true
    _avg?: CartItemsAvgAggregateInputType
    _sum?: CartItemsSumAggregateInputType
    _min?: CartItemsMinAggregateInputType
    _max?: CartItemsMaxAggregateInputType
  }

  export type CartItemsGroupByOutputType = {
    id: number
    cartId: number
    productDetailId: number
    quantity: number
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  type GetCartItemsGroupByPayload<T extends CartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
        }
      >
    >


  export type CartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productDetailId?: boolean
    quantity?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>



  export type CartItemsSelectScalar = {
    id?: boolean
    cartId?: boolean
    productDetailId?: boolean
    quantity?: boolean
  }

  export type CartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productDetailId" | "quantity", ExtArgs["result"]["cartItems"]>
  export type CartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
  }

  export type $CartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItems"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      productDetail: Prisma.$ProductDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      productDetailId: number
      quantity: number
    }, ExtArgs["result"]["cartItems"]>
    composites: {}
  }

  type CartItemsGetPayload<S extends boolean | null | undefined | CartItemsDefaultArgs> = $Result.GetResult<Prisma.$CartItemsPayload, S>

  type CartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemsCountAggregateInputType | true
    }

  export interface CartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItems'], meta: { name: 'CartItems' } }
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {CartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemsFindUniqueArgs>(args: SelectSubset<T, CartItemsFindUniqueArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemsFindFirstArgs>(args?: SelectSubset<T, CartItemsFindFirstArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemsFindManyArgs>(args?: SelectSubset<T, CartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItems.
     * @param {CartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     * 
     */
    create<T extends CartItemsCreateArgs>(args: SelectSubset<T, CartItemsCreateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemsCreateManyArgs>(args?: SelectSubset<T, CartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItems.
     * @param {CartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     * 
     */
    delete<T extends CartItemsDeleteArgs>(args: SelectSubset<T, CartItemsDeleteArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItems.
     * @param {CartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemsUpdateArgs>(args: SelectSubset<T, CartItemsUpdateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemsDeleteManyArgs>(args?: SelectSubset<T, CartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemsUpdateManyArgs>(args: SelectSubset<T, CartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItems.
     * @param {CartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends CartItemsUpsertArgs>(args: SelectSubset<T, CartItemsUpsertArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemsCountArgs>(
      args?: Subset<T, CartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemsAggregateArgs>(args: Subset<T, CartItemsAggregateArgs>): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>

    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsGroupByArgs} args - Group by arguments.
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
      T extends CartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemsGroupByArgs['orderBy'] }
        : { orderBy?: CartItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItems model
   */
  readonly fields: CartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productDetail<T extends ProductDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetailsDefaultArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItems model
   */
  interface CartItemsFieldRefs {
    readonly id: FieldRef<"CartItems", 'Int'>
    readonly cartId: FieldRef<"CartItems", 'Int'>
    readonly productDetailId: FieldRef<"CartItems", 'Int'>
    readonly quantity: FieldRef<"CartItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItems findUnique
   */
  export type CartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findUniqueOrThrow
   */
  export type CartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findFirst
   */
  export type CartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findFirstOrThrow
   */
  export type CartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findMany
   */
  export type CartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems create
   */
  export type CartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItems.
     */
    data: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
  }

  /**
   * CartItems createMany
   */
  export type CartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItems update
   */
  export type CartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItems.
     */
    data: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
    /**
     * Choose, which CartItems to update.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems updateMany
   */
  export type CartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItems upsert
   */
  export type CartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItems to update in case it exists.
     */
    where: CartItemsWhereUniqueInput
    /**
     * In case the CartItems found by the `where` argument doesn't exist, create a new CartItems with this data.
     */
    create: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
    /**
     * In case the CartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
  }

  /**
   * CartItems delete
   */
  export type CartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter which CartItems to delete.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems deleteMany
   */
  export type CartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItems without action
   */
  export type CartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: number | null
    totalPrice: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: number | null
    totalPrice: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: number | null
    totalPrice: number | null
    createdAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: number | null
    totalPrice: number | null
    createdAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customerId: number
    status: number
    totalPrice: number
    createdAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    totalPrice?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    totalPrice?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    totalPrice?: true
    createdAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    customerId: number
    status: number
    totalPrice: number
    createdAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    status?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    orderDetails?: boolean | Orders$orderDetailsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    customerId?: boolean
    status?: boolean
    totalPrice?: boolean
    createdAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "status" | "totalPrice" | "createdAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    orderDetails?: boolean | Orders$orderDetailsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      status: number
      totalPrice: number
      createdAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderDetails<T extends Orders$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly customerId: FieldRef<"Orders", 'Int'>
    readonly status: FieldRef<"Orders", 'Int'>
    readonly totalPrice: FieldRef<"Orders", 'Int'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.orderDetails
   */
  export type Orders$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productDetailId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productDetailId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productDetailId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productDetailId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    orderId: number
    productDetailId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    id?: true
    orderId?: true
    productDetailId?: true
    quantity?: true
    price?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    id?: true
    orderId?: true
    productDetailId?: true
    quantity?: true
    price?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true
    orderId?: true
    productDetailId?: true
    quantity?: true
    price?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    orderId?: true
    productDetailId?: true
    quantity?: true
    price?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    orderId?: true
    productDetailId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: number
    orderId: number
    productDetailId: number
    quantity: number
    price: number
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productDetailId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>



  export type OrderDetailsSelectScalar = {
    id?: boolean
    orderId?: boolean
    productDetailId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productDetailId" | "quantity" | "price", ExtArgs["result"]["orderDetails"]>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    productDetail?: boolean | ProductDetailsDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      productDetail: Prisma.$ProductDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productDetailId: number
      quantity: number
      price: number
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productDetail<T extends ProductDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDetailsDefaultArgs<ExtArgs>>): Prisma__ProductDetailsClient<$Result.GetResult<Prisma.$ProductDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'Int'>
    readonly orderId: FieldRef<"OrderDetails", 'Int'>
    readonly productDetailId: FieldRef<"OrderDetails", 'Int'>
    readonly quantity: FieldRef<"OrderDetails", 'Int'>
    readonly price: FieldRef<"OrderDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
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


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    city: 'city',
    district: 'district',
    ward: 'ward',
    street: 'street'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    regionId: 'regionId'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchId: 'branchId'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    warehouseId: 'warehouseId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    hot: 'hot',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    rate: 'rate',
    countRate: 'countRate',
    purchases: 'purchases',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductDetailsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    color: 'color',
    size: 'size',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type ProductDetailsScalarFieldEnum = (typeof ProductDetailsScalarFieldEnum)[keyof typeof ProductDetailsScalarFieldEnum]


  export const ProductStockScalarFieldEnum: {
    id: 'id',
    productDetailId: 'productDetailId',
    warehouseId: 'warehouseId',
    quantity: 'quantity'
  };

  export type ProductStockScalarFieldEnum = (typeof ProductStockScalarFieldEnum)[keyof typeof ProductStockScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    content: 'content',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemsScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productDetailId: 'productDetailId',
    quantity: 'quantity'
  };

  export type CartItemsScalarFieldEnum = (typeof CartItemsScalarFieldEnum)[keyof typeof CartItemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    status: 'status',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productDetailId: 'productDetailId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


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


  export const CustomersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type CustomersOrderByRelevanceFieldEnum = (typeof CustomersOrderByRelevanceFieldEnum)[keyof typeof CustomersOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    city: 'city',
    district: 'district',
    ward: 'ward',
    street: 'street'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const BranchOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address'
  };

  export type BranchOrderByRelevanceFieldEnum = (typeof BranchOrderByRelevanceFieldEnum)[keyof typeof BranchOrderByRelevanceFieldEnum]


  export const WarehouseOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type WarehouseOrderByRelevanceFieldEnum = (typeof WarehouseOrderByRelevanceFieldEnum)[keyof typeof WarehouseOrderByRelevanceFieldEnum]


  export const EmployeesOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type EmployeesOrderByRelevanceFieldEnum = (typeof EmployeesOrderByRelevanceFieldEnum)[keyof typeof EmployeesOrderByRelevanceFieldEnum]


  export const CategoriesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CategoriesOrderByRelevanceFieldEnum = (typeof CategoriesOrderByRelevanceFieldEnum)[keyof typeof CategoriesOrderByRelevanceFieldEnum]


  export const ProductsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ProductsOrderByRelevanceFieldEnum = (typeof ProductsOrderByRelevanceFieldEnum)[keyof typeof ProductsOrderByRelevanceFieldEnum]


  export const CommentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CustomersWhereInput = {
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    id?: IntFilter<"Customers"> | number
    name?: StringFilter<"Customers"> | string
    email?: StringFilter<"Customers"> | string
    phone?: StringNullableFilter<"Customers"> | string | null
    password?: StringNullableFilter<"Customers"> | string | null
    status?: IntNullableFilter<"Customers"> | number | null
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updateAt?: DateTimeNullableFilter<"Customers"> | Date | string | null
    orders?: OrdersListRelationFilter
    comments?: CommentsListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    addresses?: AddressListRelationFilter
  }

  export type CustomersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    cart?: CartOrderByWithRelationInput
    addresses?: AddressOrderByRelationAggregateInput
    _relevance?: CustomersOrderByRelevanceInput
  }

  export type CustomersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    name?: StringFilter<"Customers"> | string
    phone?: StringNullableFilter<"Customers"> | string | null
    password?: StringNullableFilter<"Customers"> | string | null
    status?: IntNullableFilter<"Customers"> | number | null
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updateAt?: DateTimeNullableFilter<"Customers"> | Date | string | null
    orders?: OrdersListRelationFilter
    comments?: CommentsListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    addresses?: AddressListRelationFilter
  }, "id" | "email">

  export type CustomersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _avg?: CustomersAvgOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
    _sum?: CustomersSumOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    OR?: CustomersScalarWhereWithAggregatesInput[]
    NOT?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customers"> | number
    name?: StringWithAggregatesFilter<"Customers"> | string
    email?: StringWithAggregatesFilter<"Customers"> | string
    phone?: StringNullableWithAggregatesFilter<"Customers"> | string | null
    password?: StringNullableWithAggregatesFilter<"Customers"> | string | null
    status?: IntNullableWithAggregatesFilter<"Customers"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"Customers"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    customerId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    ward?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    city?: SortOrder
    district?: SortOrder
    ward?: SortOrder
    street?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    customerId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    ward?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    city?: SortOrder
    district?: SortOrder
    ward?: SortOrder
    street?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    customerId?: IntWithAggregatesFilter<"Address"> | number
    city?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    ward?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    branch?: BranchListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: BranchOrderByRelationAggregateInput
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    branch?: BranchListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    regionId?: IntFilter<"Branch"> | number
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    warehouse?: WarehouseListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    regionId?: SortOrder
    region?: RegionOrderByWithRelationInput
    warehouse?: WarehouseOrderByRelationAggregateInput
    _relevance?: BranchOrderByRelevanceInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    regionId?: IntFilter<"Branch"> | number
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    warehouse?: WarehouseListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    regionId?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Branch"> | number
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringWithAggregatesFilter<"Branch"> | string
    regionId?: IntWithAggregatesFilter<"Branch"> | number
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    branchId?: IntFilter<"Warehouse"> | number
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    stocks?: ProductStockListRelationFilter
    employee?: EmployeesListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    branch?: BranchOrderByWithRelationInput
    stocks?: ProductStockOrderByRelationAggregateInput
    employee?: EmployeesOrderByRelationAggregateInput
    _relevance?: WarehouseOrderByRelevanceInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    branchId?: IntFilter<"Warehouse"> | number
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    stocks?: ProductStockListRelationFilter
    employee?: EmployeesListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    branchId?: IntWithAggregatesFilter<"Warehouse"> | number
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    id?: IntFilter<"Employees"> | number
    warehouseId?: IntFilter<"Employees"> | number
    name?: StringFilter<"Employees"> | string
    email?: StringFilter<"Employees"> | string
    phone?: StringNullableFilter<"Employees"> | string | null
    password?: StringFilter<"Employees"> | string
    status?: IntNullableFilter<"Employees"> | number | null
    createdAt?: DateTimeFilter<"Employees"> | Date | string
    updateAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }

  export type EmployeesOrderByWithRelationInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    warehouse?: WarehouseOrderByWithRelationInput
    _relevance?: EmployeesOrderByRelevanceInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    warehouseId?: IntFilter<"Employees"> | number
    name?: StringFilter<"Employees"> | string
    phone?: StringNullableFilter<"Employees"> | string | null
    password?: StringFilter<"Employees"> | string
    status?: IntNullableFilter<"Employees"> | number | null
    createdAt?: DateTimeFilter<"Employees"> | Date | string
    updateAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }, "id" | "email">

  export type EmployeesOrderByWithAggregationInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _avg?: EmployeesAvgOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
    _sum?: EmployeesSumOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employees"> | number
    warehouseId?: IntWithAggregatesFilter<"Employees"> | number
    name?: StringWithAggregatesFilter<"Employees"> | string
    email?: StringWithAggregatesFilter<"Employees"> | string
    phone?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    password?: StringWithAggregatesFilter<"Employees"> | string
    status?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    status?: IntFilter<"Categories"> | number
    hot?: IntFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updateAt?: DateTimeNullableFilter<"Categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    products?: ProductsOrderByRelationAggregateInput
    _relevance?: CategoriesOrderByRelevanceInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    status?: IntFilter<"Categories"> | number
    hot?: IntFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updateAt?: DateTimeNullableFilter<"Categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringWithAggregatesFilter<"Categories"> | string
    status?: IntWithAggregatesFilter<"Categories"> | number
    hot?: IntWithAggregatesFilter<"Categories"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    categoryId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    rate?: IntFilter<"Products"> | number
    countRate?: IntFilter<"Products"> | number
    purchases?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updateAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    productTypes?: ProductDetailsListRelationFilter
    comments?: CommentsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    category?: CategoriesOrderByWithRelationInput
    productTypes?: ProductDetailsOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    _relevance?: ProductsOrderByRelevanceInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    categoryId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    rate?: IntFilter<"Products"> | number
    countRate?: IntFilter<"Products"> | number
    purchases?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updateAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    productTypes?: ProductDetailsListRelationFilter
    comments?: CommentsListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    categoryId?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringWithAggregatesFilter<"Products"> | string
    rate?: IntWithAggregatesFilter<"Products"> | number
    countRate?: IntWithAggregatesFilter<"Products"> | number
    purchases?: IntWithAggregatesFilter<"Products"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
  }

  export type ProductDetailsWhereInput = {
    AND?: ProductDetailsWhereInput | ProductDetailsWhereInput[]
    OR?: ProductDetailsWhereInput[]
    NOT?: ProductDetailsWhereInput | ProductDetailsWhereInput[]
    id?: IntFilter<"ProductDetails"> | number
    productId?: IntFilter<"ProductDetails"> | number
    color?: IntFilter<"ProductDetails"> | number
    size?: IntFilter<"ProductDetails"> | number
    price?: IntFilter<"ProductDetails"> | number
    status?: IntFilter<"ProductDetails"> | number
    createdAt?: DateTimeFilter<"ProductDetails"> | Date | string
    updateAt?: DateTimeNullableFilter<"ProductDetails"> | Date | string | null
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    productStock?: ProductStockListRelationFilter
    orderDetail?: OrderDetailsListRelationFilter
    cartItems?: CartItemsListRelationFilter
  }

  export type ProductDetailsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    product?: ProductsOrderByWithRelationInput
    productStock?: ProductStockOrderByRelationAggregateInput
    orderDetail?: OrderDetailsOrderByRelationAggregateInput
    cartItems?: CartItemsOrderByRelationAggregateInput
  }

  export type ProductDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_size_color?: ProductDetailsProductIdSizeColorCompoundUniqueInput
    AND?: ProductDetailsWhereInput | ProductDetailsWhereInput[]
    OR?: ProductDetailsWhereInput[]
    NOT?: ProductDetailsWhereInput | ProductDetailsWhereInput[]
    productId?: IntFilter<"ProductDetails"> | number
    color?: IntFilter<"ProductDetails"> | number
    size?: IntFilter<"ProductDetails"> | number
    price?: IntFilter<"ProductDetails"> | number
    status?: IntFilter<"ProductDetails"> | number
    createdAt?: DateTimeFilter<"ProductDetails"> | Date | string
    updateAt?: DateTimeNullableFilter<"ProductDetails"> | Date | string | null
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    productStock?: ProductStockListRelationFilter
    orderDetail?: OrderDetailsListRelationFilter
    cartItems?: CartItemsListRelationFilter
  }, "id" | "productId_size_color">

  export type ProductDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: ProductDetailsCountOrderByAggregateInput
    _avg?: ProductDetailsAvgOrderByAggregateInput
    _max?: ProductDetailsMaxOrderByAggregateInput
    _min?: ProductDetailsMinOrderByAggregateInput
    _sum?: ProductDetailsSumOrderByAggregateInput
  }

  export type ProductDetailsScalarWhereWithAggregatesInput = {
    AND?: ProductDetailsScalarWhereWithAggregatesInput | ProductDetailsScalarWhereWithAggregatesInput[]
    OR?: ProductDetailsScalarWhereWithAggregatesInput[]
    NOT?: ProductDetailsScalarWhereWithAggregatesInput | ProductDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductDetails"> | number
    productId?: IntWithAggregatesFilter<"ProductDetails"> | number
    color?: IntWithAggregatesFilter<"ProductDetails"> | number
    size?: IntWithAggregatesFilter<"ProductDetails"> | number
    price?: IntWithAggregatesFilter<"ProductDetails"> | number
    status?: IntWithAggregatesFilter<"ProductDetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductDetails"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"ProductDetails"> | Date | string | null
  }

  export type ProductStockWhereInput = {
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    id?: IntFilter<"ProductStock"> | number
    productDetailId?: IntFilter<"ProductStock"> | number
    warehouseId?: IntFilter<"ProductStock"> | number
    quantity?: IntFilter<"ProductStock"> | number
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }

  export type ProductStockOrderByWithRelationInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    productDetail?: ProductDetailsOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type ProductStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productDetailId_warehouseId?: ProductStockProductDetailIdWarehouseIdCompoundUniqueInput
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    productDetailId?: IntFilter<"ProductStock"> | number
    warehouseId?: IntFilter<"ProductStock"> | number
    quantity?: IntFilter<"ProductStock"> | number
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }, "id" | "productDetailId_warehouseId">

  export type ProductStockOrderByWithAggregationInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    _count?: ProductStockCountOrderByAggregateInput
    _avg?: ProductStockAvgOrderByAggregateInput
    _max?: ProductStockMaxOrderByAggregateInput
    _min?: ProductStockMinOrderByAggregateInput
    _sum?: ProductStockSumOrderByAggregateInput
  }

  export type ProductStockScalarWhereWithAggregatesInput = {
    AND?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    OR?: ProductStockScalarWhereWithAggregatesInput[]
    NOT?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductStock"> | number
    productDetailId?: IntWithAggregatesFilter<"ProductStock"> | number
    warehouseId?: IntWithAggregatesFilter<"ProductStock"> | number
    quantity?: IntWithAggregatesFilter<"ProductStock"> | number
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    productId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updateAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    user?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    user?: CustomersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    userId?: IntFilter<"Comments"> | number
    productId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updateAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    user?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    userId?: IntWithAggregatesFilter<"Comments"> | number
    productId?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"Comments"> | Date | string | null
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    customerId?: IntFilter<"Cart"> | number
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    items?: CartItemsListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    items?: CartItemsOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    customerId?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    items?: CartItemsListRelationFilter
  }, "id" | "customerId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    customerId?: IntWithAggregatesFilter<"Cart"> | number
  }

  export type CartItemsWhereInput = {
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    id?: IntFilter<"CartItems"> | number
    cartId?: IntFilter<"CartItems"> | number
    productDetailId?: IntFilter<"CartItems"> | number
    quantity?: IntFilter<"CartItems"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
  }

  export type CartItemsOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    cart?: CartOrderByWithRelationInput
    productDetail?: ProductDetailsOrderByWithRelationInput
  }

  export type CartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cartId_productDetailId?: CartItemsCartIdProductDetailIdCompoundUniqueInput
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    cartId?: IntFilter<"CartItems"> | number
    productDetailId?: IntFilter<"CartItems"> | number
    quantity?: IntFilter<"CartItems"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
  }, "id" | "cartId_productDetailId">

  export type CartItemsOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    _count?: CartItemsCountOrderByAggregateInput
    _avg?: CartItemsAvgOrderByAggregateInput
    _max?: CartItemsMaxOrderByAggregateInput
    _min?: CartItemsMinOrderByAggregateInput
    _sum?: CartItemsSumOrderByAggregateInput
  }

  export type CartItemsScalarWhereWithAggregatesInput = {
    AND?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    OR?: CartItemsScalarWhereWithAggregatesInput[]
    NOT?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItems"> | number
    cartId?: IntWithAggregatesFilter<"CartItems"> | number
    productDetailId?: IntWithAggregatesFilter<"CartItems"> | number
    quantity?: IntWithAggregatesFilter<"CartItems"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    customerId?: IntFilter<"Orders"> | number
    status?: IntFilter<"Orders"> | number
    totalPrice?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    orderDetails?: OrderDetailsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    orderDetails?: OrderDetailsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    customerId?: IntFilter<"Orders"> | number
    status?: IntFilter<"Orders"> | number
    totalPrice?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    orderDetails?: OrderDetailsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    customerId?: IntWithAggregatesFilter<"Orders"> | number
    status?: IntWithAggregatesFilter<"Orders"> | number
    totalPrice?: IntWithAggregatesFilter<"Orders"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    orderId?: IntFilter<"OrderDetails"> | number
    productDetailId?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    price?: IntFilter<"OrderDetails"> | number
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrdersOrderByWithRelationInput
    productDetail?: ProductDetailsOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    orderId?: IntFilter<"OrderDetails"> | number
    productDetailId?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    price?: IntFilter<"OrderDetails"> | number
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    productDetail?: XOR<ProductDetailsScalarRelationFilter, ProductDetailsWhereInput>
  }, "id">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetails"> | number
    orderId?: IntWithAggregatesFilter<"OrderDetails"> | number
    productDetailId?: IntWithAggregatesFilter<"OrderDetails"> | number
    quantity?: IntWithAggregatesFilter<"OrderDetails"> | number
    price?: IntWithAggregatesFilter<"OrderDetails"> | number
  }

  export type CustomersCreateInput = {
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutCustomerInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutCustomerInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CustomersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    city: string
    district: string
    ward: string
    street: string
    customer: CustomersCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    customerId: number
    city: string
    district: string
    ward: string
    street: string
  }

  export type AddressUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    customer?: CustomersUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyInput = {
    id?: number
    customerId: number
    city: string
    district: string
    ward: string
    street: string
  }

  export type AddressUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateInput = {
    name: string
    branch?: BranchCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    branch?: BranchUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BranchCreateInput = {
    name: string
    address: string
    region: RegionCreateNestedOneWithoutBranchInput
    warehouse?: WarehouseCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    regionId: number
    warehouse?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutBranchNestedInput
    warehouse?: WarehouseUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
    warehouse?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: number
    name: string
    address: string
    regionId: number
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseCreateInput = {
    name: string
    branch: BranchCreateNestedOneWithoutWarehouseInput
    stocks?: ProductStockCreateNestedManyWithoutWarehouseInput
    employee?: EmployeesCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    branchId: number
    stocks?: ProductStockUncheckedCreateNestedManyWithoutWarehouseInput
    employee?: EmployeesUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutWarehouseNestedInput
    stocks?: ProductStockUpdateManyWithoutWarehouseNestedInput
    employee?: EmployeesUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    stocks?: ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput
    employee?: EmployeesUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    branchId: number
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeesCreateInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    warehouse: WarehouseCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateInput = {
    id?: number
    warehouseId: number
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type EmployeesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouse?: WarehouseUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesCreateManyInput = {
    id?: number
    warehouseId: number
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type EmployeesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesCreateInput = {
    name: string
    description: string
    status: number
    hot: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    status: number
    hot: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    description: string
    status: number
    hot: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateInput = {
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    category: CategoriesCreateNestedOneWithoutProductsInput
    productTypes?: ProductDetailsCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productTypes?: ProductDetailsUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    productTypes?: ProductDetailsUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productTypes?: ProductDetailsUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductDetailsCreateInput = {
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    product: ProductsCreateNestedOneWithoutProductTypesInput
    productStock?: ProductStockCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUncheckedCreateInput = {
    id?: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productStock?: ProductStockUncheckedCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsUncheckedCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsUncheckedCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUpdateInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductsUpdateOneRequiredWithoutProductTypesNestedInput
    productStock?: ProductStockUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productStock?: ProductStockUncheckedUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUncheckedUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUncheckedUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsCreateManyInput = {
    id?: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type ProductDetailsUpdateManyMutationInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductStockCreateInput = {
    quantity: number
    productDetail: ProductDetailsCreateNestedOneWithoutProductStockInput
    warehouse: WarehouseCreateNestedOneWithoutStocksInput
  }

  export type ProductStockUncheckedCreateInput = {
    id?: number
    productDetailId: number
    warehouseId: number
    quantity: number
  }

  export type ProductStockUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productDetail?: ProductDetailsUpdateOneRequiredWithoutProductStockNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStocksNestedInput
  }

  export type ProductStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockCreateManyInput = {
    id?: number
    productDetailId: number
    warehouseId: number
    quantity: number
  }

  export type ProductStockUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateInput = {
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
    user: CustomersCreateNestedOneWithoutCommentsInput
    product: ProductsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: CustomersUpdateOneRequiredWithoutCommentsNestedInput
    product?: ProductsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyInput = {
    id?: number
    userId: number
    productId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartCreateInput = {
    customer: CustomersCreateNestedOneWithoutCartInput
    items?: CartItemsCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    customerId: number
    items?: CartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    customer?: CustomersUpdateOneRequiredWithoutCartNestedInput
    items?: CartItemsUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    customerId: number
  }

  export type CartUpdateManyMutationInput = {

  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsCreateInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutItemsInput
    productDetail: ProductDetailsCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemsUncheckedCreateInput = {
    id?: number
    cartId: number
    productDetailId: number
    quantity: number
  }

  export type CartItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    productDetail?: ProductDetailsUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsCreateManyInput = {
    id?: number
    cartId: number
    productDetailId: number
    quantity: number
  }

  export type CartItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    status: number
    totalPrice: number
    createdAt?: Date | string
    customer: CustomersCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    customerId: number
    status: number
    totalPrice: number
    createdAt?: Date | string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutOrdersNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    customerId: number
    status: number
    totalPrice: number
    createdAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateInput = {
    quantity: number
    price: number
    order: OrdersCreateNestedOneWithoutOrderDetailsInput
    productDetail: ProductDetailsCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: number
    orderId: number
    productDetailId: number
    quantity: number
    price: number
  }

  export type OrderDetailsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput
    productDetail?: ProductDetailsUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateManyInput = {
    id?: number
    orderId: number
    productDetailId: number
    quantity: number
    price: number
  }

  export type OrderDetailsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomersOrderByRelevanceInput = {
    fields: CustomersOrderByRelevanceFieldEnum | CustomersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CustomersAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CustomersSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomersScalarRelationFilter = {
    is?: CustomersWhereInput
    isNot?: CustomersWhereInput
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    city?: SortOrder
    district?: SortOrder
    ward?: SortOrder
    street?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    city?: SortOrder
    district?: SortOrder
    ward?: SortOrder
    street?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    city?: SortOrder
    district?: SortOrder
    ward?: SortOrder
    street?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type WarehouseListRelationFilter = {
    every?: WarehouseWhereInput
    some?: WarehouseWhereInput
    none?: WarehouseWhereInput
  }

  export type WarehouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchOrderByRelevanceInput = {
    fields: BranchOrderByRelevanceFieldEnum | BranchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    regionId?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    regionId?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    regionId?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type ProductStockListRelationFilter = {
    every?: ProductStockWhereInput
    some?: ProductStockWhereInput
    none?: ProductStockWhereInput
  }

  export type EmployeesListRelationFilter = {
    every?: EmployeesWhereInput
    some?: EmployeesWhereInput
    none?: EmployeesWhereInput
  }

  export type ProductStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseOrderByRelevanceInput = {
    fields: WarehouseOrderByRelevanceFieldEnum | WarehouseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type EmployeesOrderByRelevanceInput = {
    fields: EmployeesOrderByRelevanceFieldEnum | EmployeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeesCountOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeesAvgOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeesSumOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesOrderByRelevanceInput = {
    fields: CategoriesOrderByRelevanceFieldEnum | CategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    hot?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    hot?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type ProductDetailsListRelationFilter = {
    every?: ProductDetailsWhereInput
    some?: ProductDetailsWhereInput
    none?: ProductDetailsWhereInput
  }

  export type ProductDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelevanceInput = {
    fields: ProductsOrderByRelevanceFieldEnum | ProductsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    rate?: SortOrder
    countRate?: SortOrder
    purchases?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type CartItemsListRelationFilter = {
    every?: CartItemsWhereInput
    some?: CartItemsWhereInput
    none?: CartItemsWhereInput
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductDetailsProductIdSizeColorCompoundUniqueInput = {
    productId: number
    size: number
    color: number
  }

  export type ProductDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
  }

  export type ProductDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    status?: SortOrder
  }

  export type ProductDetailsScalarRelationFilter = {
    is?: ProductDetailsWhereInput
    isNot?: ProductDetailsWhereInput
  }

  export type ProductStockProductDetailIdWarehouseIdCompoundUniqueInput = {
    productDetailId: number
    warehouseId: number
  }

  export type ProductStockCountOrderByAggregateInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductStockAvgOrderByAggregateInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductStockMaxOrderByAggregateInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductStockMinOrderByAggregateInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductStockSumOrderByAggregateInput = {
    id?: SortOrder
    productDetailId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemsCartIdProductDetailIdCompoundUniqueInput = {
    cartId: number
    productDetailId: number
  }

  export type CartItemsCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsSumOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productDetailId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrdersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput
    connect?: CartWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput
    connect?: CartWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrdersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCustomerInput | OrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCustomerInput | OrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCustomerInput | OrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CartUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput
    upsert?: CartUpsertWithoutCustomerInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCustomerInput, CartUpdateWithoutCustomerInput>, CartUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCustomerInput | OrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCustomerInput | OrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCustomerInput | OrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput
    upsert?: CartUpsertWithoutCustomerInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCustomerInput, CartUpdateWithoutCustomerInput>, CartUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CustomersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CustomersCreateWithoutAddressesInput, CustomersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutAddressesInput
    connect?: CustomersWhereUniqueInput
  }

  export type CustomersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CustomersCreateWithoutAddressesInput, CustomersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutAddressesInput
    upsert?: CustomersUpsertWithoutAddressesInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutAddressesInput, CustomersUpdateWithoutAddressesInput>, CustomersUncheckedUpdateWithoutAddressesInput>
  }

  export type BranchCreateNestedManyWithoutRegionInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUpdateManyWithoutRegionNestedInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRegionInput | BranchUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRegionInput | BranchUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRegionInput | BranchUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRegionInput | BranchUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRegionInput | BranchUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRegionInput | BranchUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutBranchInput = {
    create?: XOR<RegionCreateWithoutBranchInput, RegionUncheckedCreateWithoutBranchInput>
    connectOrCreate?: RegionCreateOrConnectWithoutBranchInput
    connect?: RegionWhereUniqueInput
  }

  export type WarehouseCreateNestedManyWithoutBranchInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type RegionUpdateOneRequiredWithoutBranchNestedInput = {
    create?: XOR<RegionCreateWithoutBranchInput, RegionUncheckedCreateWithoutBranchInput>
    connectOrCreate?: RegionCreateOrConnectWithoutBranchInput
    upsert?: RegionUpsertWithoutBranchInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutBranchInput, RegionUpdateWithoutBranchInput>, RegionUncheckedUpdateWithoutBranchInput>
  }

  export type WarehouseUpdateManyWithoutBranchNestedInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutBranchInput | WarehouseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutBranchInput | WarehouseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutBranchInput | WarehouseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutBranchInput | WarehouseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutBranchInput | WarehouseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutBranchInput | WarehouseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutWarehouseInput = {
    create?: XOR<BranchCreateWithoutWarehouseInput, BranchUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: BranchCreateOrConnectWithoutWarehouseInput
    connect?: BranchWhereUniqueInput
  }

  export type ProductStockCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type EmployeesCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput> | EmployeesCreateWithoutWarehouseInput[] | EmployeesUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutWarehouseInput | EmployeesCreateOrConnectWithoutWarehouseInput[]
    createMany?: EmployeesCreateManyWarehouseInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type EmployeesUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput> | EmployeesCreateWithoutWarehouseInput[] | EmployeesUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutWarehouseInput | EmployeesCreateOrConnectWithoutWarehouseInput[]
    createMany?: EmployeesCreateManyWarehouseInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutWarehouseNestedInput = {
    create?: XOR<BranchCreateWithoutWarehouseInput, BranchUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: BranchCreateOrConnectWithoutWarehouseInput
    upsert?: BranchUpsertWithoutWarehouseInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutWarehouseInput, BranchUpdateWithoutWarehouseInput>, BranchUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductStockUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutWarehouseInput | ProductStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutWarehouseInput | ProductStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutWarehouseInput | ProductStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type EmployeesUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput> | EmployeesCreateWithoutWarehouseInput[] | EmployeesUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutWarehouseInput | EmployeesCreateOrConnectWithoutWarehouseInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutWarehouseInput | EmployeesUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: EmployeesCreateManyWarehouseInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutWarehouseInput | EmployeesUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutWarehouseInput | EmployeesUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutWarehouseInput | ProductStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutWarehouseInput | ProductStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutWarehouseInput | ProductStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type EmployeesUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput> | EmployeesCreateWithoutWarehouseInput[] | EmployeesUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutWarehouseInput | EmployeesCreateOrConnectWithoutWarehouseInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutWarehouseInput | EmployeesUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: EmployeesCreateManyWarehouseInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutWarehouseInput | EmployeesUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutWarehouseInput | EmployeesUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type WarehouseCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<WarehouseCreateWithoutEmployeeInput, WarehouseUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutEmployeeInput
    connect?: WarehouseWhereUniqueInput
  }

  export type WarehouseUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<WarehouseCreateWithoutEmployeeInput, WarehouseUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutEmployeeInput
    upsert?: WarehouseUpsertWithoutEmployeeInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutEmployeeInput, WarehouseUpdateWithoutEmployeeInput>, WarehouseUncheckedUpdateWithoutEmployeeInput>
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ProductDetailsCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput> | ProductDetailsCreateWithoutProductInput[] | ProductDetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductInput | ProductDetailsCreateOrConnectWithoutProductInput[]
    createMany?: ProductDetailsCreateManyProductInputEnvelope
    connect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ProductDetailsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput> | ProductDetailsCreateWithoutProductInput[] | ProductDetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductInput | ProductDetailsCreateOrConnectWithoutProductInput[]
    createMany?: ProductDetailsCreateManyProductInputEnvelope
    connect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductDetailsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput> | ProductDetailsCreateWithoutProductInput[] | ProductDetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductInput | ProductDetailsCreateOrConnectWithoutProductInput[]
    upsert?: ProductDetailsUpsertWithWhereUniqueWithoutProductInput | ProductDetailsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDetailsCreateManyProductInputEnvelope
    set?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    disconnect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    delete?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    connect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    update?: ProductDetailsUpdateWithWhereUniqueWithoutProductInput | ProductDetailsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDetailsUpdateManyWithWhereWithoutProductInput | ProductDetailsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDetailsScalarWhereInput | ProductDetailsScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutProductInput | CommentsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutProductInput | CommentsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutProductInput | CommentsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ProductDetailsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput> | ProductDetailsCreateWithoutProductInput[] | ProductDetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductInput | ProductDetailsCreateOrConnectWithoutProductInput[]
    upsert?: ProductDetailsUpsertWithWhereUniqueWithoutProductInput | ProductDetailsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDetailsCreateManyProductInputEnvelope
    set?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    disconnect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    delete?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    connect?: ProductDetailsWhereUniqueInput | ProductDetailsWhereUniqueInput[]
    update?: ProductDetailsUpdateWithWhereUniqueWithoutProductInput | ProductDetailsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDetailsUpdateManyWithWhereWithoutProductInput | ProductDetailsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDetailsScalarWhereInput | ProductDetailsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutProductInput | CommentsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutProductInput | CommentsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutProductInput | CommentsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProductTypesInput = {
    create?: XOR<ProductsCreateWithoutProductTypesInput, ProductsUncheckedCreateWithoutProductTypesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductTypesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductStockCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput> | ProductStockCreateWithoutProductDetailInput[] | ProductStockUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductDetailInput | ProductStockCreateOrConnectWithoutProductDetailInput[]
    createMany?: ProductStockCreateManyProductDetailInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type OrderDetailsCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput> | OrderDetailsCreateWithoutProductDetailInput[] | OrderDetailsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutProductDetailInput | OrderDetailsCreateOrConnectWithoutProductDetailInput[]
    createMany?: OrderDetailsCreateManyProductDetailInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type CartItemsCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput> | CartItemsCreateWithoutProductDetailInput[] | CartItemsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductDetailInput | CartItemsCreateOrConnectWithoutProductDetailInput[]
    createMany?: CartItemsCreateManyProductDetailInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput> | ProductStockCreateWithoutProductDetailInput[] | ProductStockUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductDetailInput | ProductStockCreateOrConnectWithoutProductDetailInput[]
    createMany?: ProductStockCreateManyProductDetailInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput> | OrderDetailsCreateWithoutProductDetailInput[] | OrderDetailsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutProductDetailInput | OrderDetailsCreateOrConnectWithoutProductDetailInput[]
    createMany?: OrderDetailsCreateManyProductDetailInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutProductDetailInput = {
    create?: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput> | CartItemsCreateWithoutProductDetailInput[] | CartItemsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductDetailInput | CartItemsCreateOrConnectWithoutProductDetailInput[]
    createMany?: CartItemsCreateManyProductDetailInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type ProductsUpdateOneRequiredWithoutProductTypesNestedInput = {
    create?: XOR<ProductsCreateWithoutProductTypesInput, ProductsUncheckedCreateWithoutProductTypesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductTypesInput
    upsert?: ProductsUpsertWithoutProductTypesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductTypesInput, ProductsUpdateWithoutProductTypesInput>, ProductsUncheckedUpdateWithoutProductTypesInput>
  }

  export type ProductStockUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput> | ProductStockCreateWithoutProductDetailInput[] | ProductStockUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductDetailInput | ProductStockCreateOrConnectWithoutProductDetailInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductDetailInput | ProductStockUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: ProductStockCreateManyProductDetailInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductDetailInput | ProductStockUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductDetailInput | ProductStockUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type OrderDetailsUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput> | OrderDetailsCreateWithoutProductDetailInput[] | OrderDetailsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutProductDetailInput | OrderDetailsCreateOrConnectWithoutProductDetailInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutProductDetailInput | OrderDetailsUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: OrderDetailsCreateManyProductDetailInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutProductDetailInput | OrderDetailsUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutProductDetailInput | OrderDetailsUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type CartItemsUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput> | CartItemsCreateWithoutProductDetailInput[] | CartItemsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductDetailInput | CartItemsCreateOrConnectWithoutProductDetailInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProductDetailInput | CartItemsUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: CartItemsCreateManyProductDetailInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProductDetailInput | CartItemsUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProductDetailInput | CartItemsUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput> | ProductStockCreateWithoutProductDetailInput[] | ProductStockUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductDetailInput | ProductStockCreateOrConnectWithoutProductDetailInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductDetailInput | ProductStockUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: ProductStockCreateManyProductDetailInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductDetailInput | ProductStockUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductDetailInput | ProductStockUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput> | OrderDetailsCreateWithoutProductDetailInput[] | OrderDetailsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutProductDetailInput | OrderDetailsCreateOrConnectWithoutProductDetailInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutProductDetailInput | OrderDetailsUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: OrderDetailsCreateManyProductDetailInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutProductDetailInput | OrderDetailsUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutProductDetailInput | OrderDetailsUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutProductDetailNestedInput = {
    create?: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput> | CartItemsCreateWithoutProductDetailInput[] | CartItemsUncheckedCreateWithoutProductDetailInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductDetailInput | CartItemsCreateOrConnectWithoutProductDetailInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProductDetailInput | CartItemsUpsertWithWhereUniqueWithoutProductDetailInput[]
    createMany?: CartItemsCreateManyProductDetailInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProductDetailInput | CartItemsUpdateWithWhereUniqueWithoutProductDetailInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProductDetailInput | CartItemsUpdateManyWithWhereWithoutProductDetailInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type ProductDetailsCreateNestedOneWithoutProductStockInput = {
    create?: XOR<ProductDetailsCreateWithoutProductStockInput, ProductDetailsUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductStockInput
    connect?: ProductDetailsWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutStocksInput = {
    create?: XOR<WarehouseCreateWithoutStocksInput, WarehouseUncheckedCreateWithoutStocksInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStocksInput
    connect?: WarehouseWhereUniqueInput
  }

  export type ProductDetailsUpdateOneRequiredWithoutProductStockNestedInput = {
    create?: XOR<ProductDetailsCreateWithoutProductStockInput, ProductDetailsUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutProductStockInput
    upsert?: ProductDetailsUpsertWithoutProductStockInput
    connect?: ProductDetailsWhereUniqueInput
    update?: XOR<XOR<ProductDetailsUpdateToOneWithWhereWithoutProductStockInput, ProductDetailsUpdateWithoutProductStockInput>, ProductDetailsUncheckedUpdateWithoutProductStockInput>
  }

  export type WarehouseUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<WarehouseCreateWithoutStocksInput, WarehouseUncheckedCreateWithoutStocksInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStocksInput
    upsert?: WarehouseUpsertWithoutStocksInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutStocksInput, WarehouseUpdateWithoutStocksInput>, WarehouseUncheckedUpdateWithoutStocksInput>
  }

  export type CustomersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CustomersCreateWithoutCommentsInput, CustomersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCommentsInput
    connect?: CustomersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCommentsInput
    connect?: ProductsWhereUniqueInput
  }

  export type CustomersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<CustomersCreateWithoutCommentsInput, CustomersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCommentsInput
    upsert?: CustomersUpsertWithoutCommentsInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutCommentsInput, CustomersUpdateWithoutCommentsInput>, CustomersUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCommentsInput
    upsert?: ProductsUpsertWithoutCommentsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCommentsInput, ProductsUpdateWithoutCommentsInput>, ProductsUncheckedUpdateWithoutCommentsInput>
  }

  export type CustomersCreateNestedOneWithoutCartInput = {
    create?: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCartInput
    connect?: CustomersWhereUniqueInput
  }

  export type CartItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type CustomersUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCartInput
    upsert?: CustomersUpsertWithoutCartInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutCartInput, CustomersUpdateWithoutCartInput>, CustomersUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductDetailsCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductDetailsCreateWithoutCartItemsInput, ProductDetailsUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutCartItemsInput
    connect?: ProductDetailsWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type ProductDetailsUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductDetailsCreateWithoutCartItemsInput, ProductDetailsUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutCartItemsInput
    upsert?: ProductDetailsUpsertWithoutCartItemsInput
    connect?: ProductDetailsWhereUniqueInput
    update?: XOR<XOR<ProductDetailsUpdateToOneWithWhereWithoutCartItemsInput, ProductDetailsUpdateWithoutCartItemsInput>, ProductDetailsUncheckedUpdateWithoutCartItemsInput>
  }

  export type CustomersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomersCreateWithoutOrdersInput, CustomersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput
    connect?: CustomersWhereUniqueInput
  }

  export type OrderDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type CustomersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomersCreateWithoutOrdersInput, CustomersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput
    upsert?: CustomersUpsertWithoutOrdersInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutOrdersInput, CustomersUpdateWithoutOrdersInput>, CustomersUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductDetailsCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<ProductDetailsCreateWithoutOrderDetailInput, ProductDetailsUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutOrderDetailInput
    connect?: ProductDetailsWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailsInput
    upsert?: OrdersUpsertWithoutOrderDetailsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderDetailsInput, OrdersUpdateWithoutOrderDetailsInput>, OrdersUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type ProductDetailsUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<ProductDetailsCreateWithoutOrderDetailInput, ProductDetailsUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductDetailsCreateOrConnectWithoutOrderDetailInput
    upsert?: ProductDetailsUpsertWithoutOrderDetailInput
    connect?: ProductDetailsWhereUniqueInput
    update?: XOR<XOR<ProductDetailsUpdateToOneWithWhereWithoutOrderDetailInput, ProductDetailsUpdateWithoutOrderDetailInput>, ProductDetailsUncheckedUpdateWithoutOrderDetailInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrdersCreateWithoutCustomerInput = {
    status: number
    totalPrice: number
    createdAt?: Date | string
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutCustomerInput = {
    id?: number
    status: number
    totalPrice: number
    createdAt?: Date | string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput>
  }

  export type OrdersCreateManyCustomerInputEnvelope = {
    data: OrdersCreateManyCustomerInput | OrdersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
    product: ProductsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutCustomerInput = {
    items?: CartItemsCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCustomerInput = {
    id?: number
    items?: CartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCustomerInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateWithoutCustomerInput = {
    city: string
    district: string
    ward: string
    street: string
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: number
    city: string
    district: string
    ward: string
    street: string
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutCustomerInput, OrdersUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutCustomerInput, OrdersUncheckedUpdateWithoutCustomerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutCustomerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    customerId?: IntFilter<"Orders"> | number
    status?: IntFilter<"Orders"> | number
    totalPrice?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    productId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updateAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
  }

  export type CartUpsertWithoutCustomerInput = {
    update: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCustomerInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
  }

  export type CartUpdateWithoutCustomerInput = {
    items?: CartItemsUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    customerId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    ward?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
  }

  export type CustomersCreateWithoutAddressesInput = {
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutAddressesInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutAddressesInput, CustomersUncheckedCreateWithoutAddressesInput>
  }

  export type CustomersUpsertWithoutAddressesInput = {
    update: XOR<CustomersUpdateWithoutAddressesInput, CustomersUncheckedUpdateWithoutAddressesInput>
    create: XOR<CustomersCreateWithoutAddressesInput, CustomersUncheckedCreateWithoutAddressesInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutAddressesInput, CustomersUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomersUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type BranchCreateWithoutRegionInput = {
    name: string
    address: string
    warehouse?: WarehouseCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutRegionInput = {
    id?: number
    name: string
    address: string
    warehouse?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutRegionInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput>
  }

  export type BranchCreateManyRegionInputEnvelope = {
    data: BranchCreateManyRegionInput | BranchCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithWhereUniqueWithoutRegionInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutRegionInput, BranchUncheckedUpdateWithoutRegionInput>
    create: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutRegionInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutRegionInput, BranchUncheckedUpdateWithoutRegionInput>
  }

  export type BranchUpdateManyWithWhereWithoutRegionInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutRegionInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    regionId?: IntFilter<"Branch"> | number
  }

  export type RegionCreateWithoutBranchInput = {
    name: string
  }

  export type RegionUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
  }

  export type RegionCreateOrConnectWithoutBranchInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutBranchInput, RegionUncheckedCreateWithoutBranchInput>
  }

  export type WarehouseCreateWithoutBranchInput = {
    name: string
    stocks?: ProductStockCreateNestedManyWithoutWarehouseInput
    employee?: EmployeesCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
    stocks?: ProductStockUncheckedCreateNestedManyWithoutWarehouseInput
    employee?: EmployeesUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput>
  }

  export type WarehouseCreateManyBranchInputEnvelope = {
    data: WarehouseCreateManyBranchInput | WarehouseCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutBranchInput = {
    update: XOR<RegionUpdateWithoutBranchInput, RegionUncheckedUpdateWithoutBranchInput>
    create: XOR<RegionCreateWithoutBranchInput, RegionUncheckedCreateWithoutBranchInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutBranchInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutBranchInput, RegionUncheckedUpdateWithoutBranchInput>
  }

  export type RegionUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUpsertWithWhereUniqueWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutBranchInput, WarehouseUncheckedUpdateWithoutBranchInput>
    create: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutBranchInput, WarehouseUncheckedUpdateWithoutBranchInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutBranchInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutBranchInput>
  }

  export type WarehouseScalarWhereInput = {
    AND?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    OR?: WarehouseScalarWhereInput[]
    NOT?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    branchId?: IntFilter<"Warehouse"> | number
  }

  export type BranchCreateWithoutWarehouseInput = {
    name: string
    address: string
    region: RegionCreateNestedOneWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutWarehouseInput = {
    id?: number
    name: string
    address: string
    regionId: number
  }

  export type BranchCreateOrConnectWithoutWarehouseInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutWarehouseInput, BranchUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductStockCreateWithoutWarehouseInput = {
    quantity: number
    productDetail: ProductDetailsCreateNestedOneWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutWarehouseInput = {
    id?: number
    productDetailId: number
    quantity: number
  }

  export type ProductStockCreateOrConnectWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductStockCreateManyWarehouseInputEnvelope = {
    data: ProductStockCreateManyWarehouseInput | ProductStockCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type EmployeesCreateWithoutWarehouseInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type EmployeesUncheckedCreateWithoutWarehouseInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type EmployeesCreateOrConnectWithoutWarehouseInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput>
  }

  export type EmployeesCreateManyWarehouseInputEnvelope = {
    data: EmployeesCreateManyWarehouseInput | EmployeesCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutWarehouseInput = {
    update: XOR<BranchUpdateWithoutWarehouseInput, BranchUncheckedUpdateWithoutWarehouseInput>
    create: XOR<BranchCreateWithoutWarehouseInput, BranchUncheckedCreateWithoutWarehouseInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutWarehouseInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutWarehouseInput, BranchUncheckedUpdateWithoutWarehouseInput>
  }

  export type BranchUpdateWithoutWarehouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutWarehouseInput, ProductStockUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutWarehouseInput, ProductStockUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutWarehouseInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ProductStockScalarWhereInput = {
    AND?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    OR?: ProductStockScalarWhereInput[]
    NOT?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    id?: IntFilter<"ProductStock"> | number
    productDetailId?: IntFilter<"ProductStock"> | number
    warehouseId?: IntFilter<"ProductStock"> | number
    quantity?: IntFilter<"ProductStock"> | number
  }

  export type EmployeesUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: EmployeesWhereUniqueInput
    update: XOR<EmployeesUpdateWithoutWarehouseInput, EmployeesUncheckedUpdateWithoutWarehouseInput>
    create: XOR<EmployeesCreateWithoutWarehouseInput, EmployeesUncheckedCreateWithoutWarehouseInput>
  }

  export type EmployeesUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: EmployeesWhereUniqueInput
    data: XOR<EmployeesUpdateWithoutWarehouseInput, EmployeesUncheckedUpdateWithoutWarehouseInput>
  }

  export type EmployeesUpdateManyWithWhereWithoutWarehouseInput = {
    where: EmployeesScalarWhereInput
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type EmployeesScalarWhereInput = {
    AND?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    OR?: EmployeesScalarWhereInput[]
    NOT?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    id?: IntFilter<"Employees"> | number
    warehouseId?: IntFilter<"Employees"> | number
    name?: StringFilter<"Employees"> | string
    email?: StringFilter<"Employees"> | string
    phone?: StringNullableFilter<"Employees"> | string | null
    password?: StringFilter<"Employees"> | string
    status?: IntNullableFilter<"Employees"> | number | null
    createdAt?: DateTimeFilter<"Employees"> | Date | string
    updateAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
  }

  export type WarehouseCreateWithoutEmployeeInput = {
    name: string
    branch: BranchCreateNestedOneWithoutWarehouseInput
    stocks?: ProductStockCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutEmployeeInput = {
    id?: number
    name: string
    branchId: number
    stocks?: ProductStockUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutEmployeeInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutEmployeeInput, WarehouseUncheckedCreateWithoutEmployeeInput>
  }

  export type WarehouseUpsertWithoutEmployeeInput = {
    update: XOR<WarehouseUpdateWithoutEmployeeInput, WarehouseUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WarehouseCreateWithoutEmployeeInput, WarehouseUncheckedCreateWithoutEmployeeInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutEmployeeInput, WarehouseUncheckedUpdateWithoutEmployeeInput>
  }

  export type WarehouseUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutWarehouseNestedInput
    stocks?: ProductStockUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    stocks?: ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type ProductsCreateWithoutCategoryInput = {
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productTypes?: ProductDetailsCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productTypes?: ProductDetailsUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    categoryId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    rate?: IntFilter<"Products"> | number
    countRate?: IntFilter<"Products"> | number
    purchases?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updateAt?: DateTimeNullableFilter<"Products"> | Date | string | null
  }

  export type CategoriesCreateWithoutProductsInput = {
    name: string
    description: string
    status: number
    hot: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description: string
    status: number
    hot: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductDetailsCreateWithoutProductInput = {
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productStock?: ProductStockCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUncheckedCreateWithoutProductInput = {
    id?: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productStock?: ProductStockUncheckedCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsUncheckedCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsUncheckedCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsCreateOrConnectWithoutProductInput = {
    where: ProductDetailsWhereUniqueInput
    create: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput>
  }

  export type ProductDetailsCreateManyProductInputEnvelope = {
    data: ProductDetailsCreateManyProductInput | ProductDetailsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutProductInput = {
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
    user: CustomersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutProductInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput>
  }

  export type CommentsCreateManyProductInputEnvelope = {
    data: CommentsCreateManyProductInput | CommentsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    hot?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductDetailsUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductDetailsWhereUniqueInput
    update: XOR<ProductDetailsUpdateWithoutProductInput, ProductDetailsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDetailsCreateWithoutProductInput, ProductDetailsUncheckedCreateWithoutProductInput>
  }

  export type ProductDetailsUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductDetailsWhereUniqueInput
    data: XOR<ProductDetailsUpdateWithoutProductInput, ProductDetailsUncheckedUpdateWithoutProductInput>
  }

  export type ProductDetailsUpdateManyWithWhereWithoutProductInput = {
    where: ProductDetailsScalarWhereInput
    data: XOR<ProductDetailsUpdateManyMutationInput, ProductDetailsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductDetailsScalarWhereInput = {
    AND?: ProductDetailsScalarWhereInput | ProductDetailsScalarWhereInput[]
    OR?: ProductDetailsScalarWhereInput[]
    NOT?: ProductDetailsScalarWhereInput | ProductDetailsScalarWhereInput[]
    id?: IntFilter<"ProductDetails"> | number
    productId?: IntFilter<"ProductDetails"> | number
    color?: IntFilter<"ProductDetails"> | number
    size?: IntFilter<"ProductDetails"> | number
    price?: IntFilter<"ProductDetails"> | number
    status?: IntFilter<"ProductDetails"> | number
    createdAt?: DateTimeFilter<"ProductDetails"> | Date | string
    updateAt?: DateTimeNullableFilter<"ProductDetails"> | Date | string | null
  }

  export type CommentsUpsertWithWhereUniqueWithoutProductInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutProductInput, CommentsUncheckedUpdateWithoutProductInput>
    create: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutProductInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutProductInput, CommentsUncheckedUpdateWithoutProductInput>
  }

  export type CommentsUpdateManyWithWhereWithoutProductInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsCreateWithoutProductTypesInput = {
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    category: CategoriesCreateNestedOneWithoutProductsInput
    comments?: CommentsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProductTypesInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProductTypesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductTypesInput, ProductsUncheckedCreateWithoutProductTypesInput>
  }

  export type ProductStockCreateWithoutProductDetailInput = {
    quantity: number
    warehouse: WarehouseCreateNestedOneWithoutStocksInput
  }

  export type ProductStockUncheckedCreateWithoutProductDetailInput = {
    id?: number
    warehouseId: number
    quantity: number
  }

  export type ProductStockCreateOrConnectWithoutProductDetailInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput>
  }

  export type ProductStockCreateManyProductDetailInputEnvelope = {
    data: ProductStockCreateManyProductDetailInput | ProductStockCreateManyProductDetailInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailsCreateWithoutProductDetailInput = {
    quantity: number
    price: number
    order: OrdersCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutProductDetailInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type OrderDetailsCreateOrConnectWithoutProductDetailInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput>
  }

  export type OrderDetailsCreateManyProductDetailInputEnvelope = {
    data: OrderDetailsCreateManyProductDetailInput | OrderDetailsCreateManyProductDetailInput[]
    skipDuplicates?: boolean
  }

  export type CartItemsCreateWithoutProductDetailInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemsUncheckedCreateWithoutProductDetailInput = {
    id?: number
    cartId: number
    quantity: number
  }

  export type CartItemsCreateOrConnectWithoutProductDetailInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput>
  }

  export type CartItemsCreateManyProductDetailInputEnvelope = {
    data: CartItemsCreateManyProductDetailInput | CartItemsCreateManyProductDetailInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithoutProductTypesInput = {
    update: XOR<ProductsUpdateWithoutProductTypesInput, ProductsUncheckedUpdateWithoutProductTypesInput>
    create: XOR<ProductsCreateWithoutProductTypesInput, ProductsUncheckedCreateWithoutProductTypesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductTypesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductTypesInput, ProductsUncheckedUpdateWithoutProductTypesInput>
  }

  export type ProductsUpdateWithoutProductTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductStockUpsertWithWhereUniqueWithoutProductDetailInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutProductDetailInput, ProductStockUncheckedUpdateWithoutProductDetailInput>
    create: XOR<ProductStockCreateWithoutProductDetailInput, ProductStockUncheckedCreateWithoutProductDetailInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutProductDetailInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutProductDetailInput, ProductStockUncheckedUpdateWithoutProductDetailInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutProductDetailInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutProductDetailInput>
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutProductDetailInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutProductDetailInput, OrderDetailsUncheckedUpdateWithoutProductDetailInput>
    create: XOR<OrderDetailsCreateWithoutProductDetailInput, OrderDetailsUncheckedCreateWithoutProductDetailInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutProductDetailInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutProductDetailInput, OrderDetailsUncheckedUpdateWithoutProductDetailInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutProductDetailInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutProductDetailInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    orderId?: IntFilter<"OrderDetails"> | number
    productDetailId?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    price?: IntFilter<"OrderDetails"> | number
  }

  export type CartItemsUpsertWithWhereUniqueWithoutProductDetailInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutProductDetailInput, CartItemsUncheckedUpdateWithoutProductDetailInput>
    create: XOR<CartItemsCreateWithoutProductDetailInput, CartItemsUncheckedCreateWithoutProductDetailInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutProductDetailInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutProductDetailInput, CartItemsUncheckedUpdateWithoutProductDetailInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutProductDetailInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutProductDetailInput>
  }

  export type CartItemsScalarWhereInput = {
    AND?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    OR?: CartItemsScalarWhereInput[]
    NOT?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    id?: IntFilter<"CartItems"> | number
    cartId?: IntFilter<"CartItems"> | number
    productDetailId?: IntFilter<"CartItems"> | number
    quantity?: IntFilter<"CartItems"> | number
  }

  export type ProductDetailsCreateWithoutProductStockInput = {
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    product: ProductsCreateNestedOneWithoutProductTypesInput
    orderDetail?: OrderDetailsCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUncheckedCreateWithoutProductStockInput = {
    id?: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    orderDetail?: OrderDetailsUncheckedCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsUncheckedCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsCreateOrConnectWithoutProductStockInput = {
    where: ProductDetailsWhereUniqueInput
    create: XOR<ProductDetailsCreateWithoutProductStockInput, ProductDetailsUncheckedCreateWithoutProductStockInput>
  }

  export type WarehouseCreateWithoutStocksInput = {
    name: string
    branch: BranchCreateNestedOneWithoutWarehouseInput
    employee?: EmployeesCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutStocksInput = {
    id?: number
    name: string
    branchId: number
    employee?: EmployeesUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutStocksInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutStocksInput, WarehouseUncheckedCreateWithoutStocksInput>
  }

  export type ProductDetailsUpsertWithoutProductStockInput = {
    update: XOR<ProductDetailsUpdateWithoutProductStockInput, ProductDetailsUncheckedUpdateWithoutProductStockInput>
    create: XOR<ProductDetailsCreateWithoutProductStockInput, ProductDetailsUncheckedCreateWithoutProductStockInput>
    where?: ProductDetailsWhereInput
  }

  export type ProductDetailsUpdateToOneWithWhereWithoutProductStockInput = {
    where?: ProductDetailsWhereInput
    data: XOR<ProductDetailsUpdateWithoutProductStockInput, ProductDetailsUncheckedUpdateWithoutProductStockInput>
  }

  export type ProductDetailsUpdateWithoutProductStockInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductsUpdateOneRequiredWithoutProductTypesNestedInput
    orderDetail?: OrderDetailsUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateWithoutProductStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDetail?: OrderDetailsUncheckedUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUncheckedUpdateManyWithoutProductDetailNestedInput
  }

  export type WarehouseUpsertWithoutStocksInput = {
    update: XOR<WarehouseUpdateWithoutStocksInput, WarehouseUncheckedUpdateWithoutStocksInput>
    create: XOR<WarehouseCreateWithoutStocksInput, WarehouseUncheckedCreateWithoutStocksInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutStocksInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutStocksInput, WarehouseUncheckedUpdateWithoutStocksInput>
  }

  export type WarehouseUpdateWithoutStocksInput = {
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutWarehouseNestedInput
    employee?: EmployeesUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    employee?: EmployeesUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type CustomersCreateWithoutCommentsInput = {
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    cart?: CartCreateNestedOneWithoutCustomerInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    cart?: CartUncheckedCreateNestedOneWithoutCustomerInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutCommentsInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutCommentsInput, CustomersUncheckedCreateWithoutCommentsInput>
  }

  export type ProductsCreateWithoutCommentsInput = {
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    category: CategoriesCreateNestedOneWithoutProductsInput
    productTypes?: ProductDetailsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCommentsInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productTypes?: ProductDetailsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCommentsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
  }

  export type CustomersUpsertWithoutCommentsInput = {
    update: XOR<CustomersUpdateWithoutCommentsInput, CustomersUncheckedUpdateWithoutCommentsInput>
    create: XOR<CustomersCreateWithoutCommentsInput, CustomersUncheckedCreateWithoutCommentsInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutCommentsInput, CustomersUncheckedUpdateWithoutCommentsInput>
  }

  export type CustomersUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    cart?: CartUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    cart?: CartUncheckedUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProductsUpsertWithoutCommentsInput = {
    update: XOR<ProductsUpdateWithoutCommentsInput, ProductsUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCommentsInput, ProductsUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductsUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    productTypes?: ProductDetailsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productTypes?: ProductDetailsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CustomersCreateWithoutCartInput = {
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutCartInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutCartInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateWithoutCartInput = {
    quantity: number
    productDetail: ProductDetailsCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemsUncheckedCreateWithoutCartInput = {
    id?: number
    productDetailId: number
    quantity: number
  }

  export type CartItemsCreateOrConnectWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateManyCartInputEnvelope = {
    data: CartItemsCreateManyCartInput | CartItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CustomersUpsertWithoutCartInput = {
    update: XOR<CustomersUpdateWithoutCartInput, CustomersUncheckedUpdateWithoutCartInput>
    create: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutCartInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutCartInput, CustomersUncheckedUpdateWithoutCartInput>
  }

  export type CustomersUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutCartInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    customer: CustomersCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: number
    customerId: number
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type ProductDetailsCreateWithoutCartItemsInput = {
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    product: ProductsCreateNestedOneWithoutProductTypesInput
    productStock?: ProductStockCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUncheckedCreateWithoutCartItemsInput = {
    id?: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productStock?: ProductStockUncheckedCreateNestedManyWithoutProductDetailInput
    orderDetail?: OrderDetailsUncheckedCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsCreateOrConnectWithoutCartItemsInput = {
    where: ProductDetailsWhereUniqueInput
    create: XOR<ProductDetailsCreateWithoutCartItemsInput, ProductDetailsUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    customer?: CustomersUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDetailsUpsertWithoutCartItemsInput = {
    update: XOR<ProductDetailsUpdateWithoutCartItemsInput, ProductDetailsUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductDetailsCreateWithoutCartItemsInput, ProductDetailsUncheckedCreateWithoutCartItemsInput>
    where?: ProductDetailsWhereInput
  }

  export type ProductDetailsUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductDetailsWhereInput
    data: XOR<ProductDetailsUpdateWithoutCartItemsInput, ProductDetailsUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductDetailsUpdateWithoutCartItemsInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductsUpdateOneRequiredWithoutProductTypesNestedInput
    productStock?: ProductStockUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productStock?: ProductStockUncheckedUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUncheckedUpdateManyWithoutProductDetailNestedInput
  }

  export type CustomersCreateWithoutOrdersInput = {
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    comments?: CommentsCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutCustomerInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password?: string | null
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutCustomerInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutOrdersInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutOrdersInput, CustomersUncheckedCreateWithoutOrdersInput>
  }

  export type OrderDetailsCreateWithoutOrderInput = {
    quantity: number
    price: number
    productDetail: ProductDetailsCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    productDetailId: number
    quantity: number
    price: number
  }

  export type OrderDetailsCreateOrConnectWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsCreateManyOrderInputEnvelope = {
    data: OrderDetailsCreateManyOrderInput | OrderDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomersUpsertWithoutOrdersInput = {
    update: XOR<CustomersUpdateWithoutOrdersInput, CustomersUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomersCreateWithoutOrdersInput, CustomersUncheckedCreateWithoutOrdersInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutOrdersInput, CustomersUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentsUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutCustomerNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrdersCreateWithoutOrderDetailsInput = {
    status: number
    totalPrice: number
    createdAt?: Date | string
    customer: CustomersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrderDetailsInput = {
    id?: number
    customerId: number
    status: number
    totalPrice: number
    createdAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrderDetailsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
  }

  export type ProductDetailsCreateWithoutOrderDetailInput = {
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    product: ProductsCreateNestedOneWithoutProductTypesInput
    productStock?: ProductStockCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsUncheckedCreateWithoutOrderDetailInput = {
    id?: number
    productId: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
    productStock?: ProductStockUncheckedCreateNestedManyWithoutProductDetailInput
    cartItems?: CartItemsUncheckedCreateNestedManyWithoutProductDetailInput
  }

  export type ProductDetailsCreateOrConnectWithoutOrderDetailInput = {
    where: ProductDetailsWhereUniqueInput
    create: XOR<ProductDetailsCreateWithoutOrderDetailInput, ProductDetailsUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrdersUpsertWithoutOrderDetailsInput = {
    update: XOR<OrdersUpdateWithoutOrderDetailsInput, OrdersUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderDetailsInput, OrdersUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrdersUpdateWithoutOrderDetailsInput = {
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDetailsUpsertWithoutOrderDetailInput = {
    update: XOR<ProductDetailsUpdateWithoutOrderDetailInput, ProductDetailsUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<ProductDetailsCreateWithoutOrderDetailInput, ProductDetailsUncheckedCreateWithoutOrderDetailInput>
    where?: ProductDetailsWhereInput
  }

  export type ProductDetailsUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: ProductDetailsWhereInput
    data: XOR<ProductDetailsUpdateWithoutOrderDetailInput, ProductDetailsUncheckedUpdateWithoutOrderDetailInput>
  }

  export type ProductDetailsUpdateWithoutOrderDetailInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductsUpdateOneRequiredWithoutProductTypesNestedInput
    productStock?: ProductStockUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productStock?: ProductStockUncheckedUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUncheckedUpdateManyWithoutProductDetailNestedInput
  }

  export type OrdersCreateManyCustomerInput = {
    id?: number
    status: number
    totalPrice: number
    createdAt?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    productId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type AddressCreateManyCustomerInput = {
    id?: number
    city: string
    district: string
    ward: string
    street: string
  }

  export type OrdersUpdateWithoutCustomerInput = {
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUpdateWithoutCustomerInput = {
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    ward?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type BranchCreateManyRegionInput = {
    id?: number
    name: string
    address: string
  }

  export type BranchUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    warehouse?: WarehouseUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    warehouse?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseCreateManyBranchInput = {
    id?: number
    name: string
  }

  export type WarehouseUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    stocks?: ProductStockUpdateManyWithoutWarehouseNestedInput
    employee?: EmployeesUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stocks?: ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput
    employee?: EmployeesUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductStockCreateManyWarehouseInput = {
    id?: number
    productDetailId: number
    quantity: number
  }

  export type EmployeesCreateManyWarehouseInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    status?: number | null
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type ProductStockUpdateWithoutWarehouseInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productDetail?: ProductDetailsUpdateOneRequiredWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeesUpdateWithoutWarehouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    rate: number
    countRate: number
    purchases: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type ProductsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productTypes?: ProductDetailsUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productTypes?: ProductDetailsUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    countRate?: IntFieldUpdateOperationsInput | number
    purchases?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductDetailsCreateManyProductInput = {
    id?: number
    color: number
    size: number
    price: number
    status: number
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type CommentsCreateManyProductInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string | null
  }

  export type ProductDetailsUpdateWithoutProductInput = {
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productStock?: ProductStockUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productStock?: ProductStockUncheckedUpdateManyWithoutProductDetailNestedInput
    orderDetail?: OrderDetailsUncheckedUpdateManyWithoutProductDetailNestedInput
    cartItems?: CartItemsUncheckedUpdateManyWithoutProductDetailNestedInput
  }

  export type ProductDetailsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUpdateWithoutProductInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: CustomersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductStockCreateManyProductDetailInput = {
    id?: number
    warehouseId: number
    quantity: number
  }

  export type OrderDetailsCreateManyProductDetailInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type CartItemsCreateManyProductDetailInput = {
    id?: number
    cartId: number
    quantity: number
  }

  export type ProductStockUpdateWithoutProductDetailInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    warehouse?: WarehouseUpdateOneRequiredWithoutStocksNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUncheckedUpdateManyWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUpdateWithoutProductDetailInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUpdateWithoutProductDetailInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyWithoutProductDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsCreateManyCartInput = {
    id?: number
    productDetailId: number
    quantity: number
  }

  export type CartItemsUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productDetail?: ProductDetailsUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateManyOrderInput = {
    id?: number
    productDetailId: number
    quantity: number
    price: number
  }

  export type OrderDetailsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    productDetail?: ProductDetailsUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDetailId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
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