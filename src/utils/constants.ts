/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x60BE01B663A8F90eA986bCa41b658D85113E4E19'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let STABLE_COINS: string[] = ['0xB56EEadF495DF9d706A9041d7Ad7E53c019Efd9a']

export const WETH_ADDRESS = '0xbfeFf56be34305B402274a976033577B1A182748'
export const USDC_WETH_03_POOL = '0x0B6A4Eccd942AF4012e11838e85073DA5ac6e67a'

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export let WHITELIST_TOKENS: string[] = [
  WETH_ADDRESS // WETH
]

export let MINIMUM_ETH_LOCKED = BigDecimal.fromString('60')
export let Q192 = 2 ** 192
