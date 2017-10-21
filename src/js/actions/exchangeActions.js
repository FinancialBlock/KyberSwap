
//import {RATE_EPSILON} from "../services/constants.js"
import constants from "../services/constants"

export function selectToken(symbol,address, type) {
	 return {
	    type: "EXCHANGE.SELECT_TOKEN",
	    payload: {symbol,address, type}
	  }
}



export function  errorSelectToken(message) {
	return {
		type: "THOW_ERROR_SELECT_TOKEN",
		payload: message
	}
}


export function goToStep(step){
	return {
		type: "GO_TO_STEP",
		payload: step
	}	
}

export function specifyGas(value) {
	return {
		type: "EXCHANGE_SPECIFY_GAS",
		payload: value
	}	
}

export function specifyGasPrice(value) {
	return {
		type: "EXCHANGE_SPECIFY_GAS_PRICE",
		payload: value
	}	
}

export function showAdvance(){
	return {
		type: "EXCHANGE.SHOW_ADVANCE",		
	}		
}

export function hideAdvance(){
	return {
		type: "EXCHANGE.HIDE_ADVANCE",		
	}		
}

export function changeSourceAmout(amount){
	return {
		type: "EXCHANGE.CHANGE_SOURCE_AMOUNT",
		payload: amount		
	}			
}

export function updateRateExchange(rate){
	console.log(rate)
	if(rate){
		var offeredRate = rate[0].times(1-constants.RATE_EPSILON).toString(10)
		var expirationBlock = rate[1].toString(10)
		var reserveBalance = rate[2].toString(10)
		return {
			type: "EXCHANGE.UPDATE_RATE",
			payload: {offeredRate, expirationBlock, reserveBalance}
		}	
	}else{
		return {
			type: "EXCHANGE.UPDATE_RATE",
			payload: {offeredRate : 0, expirationBlock: 0, reserveBalance: 0}
		}	
	}
	
	// var bigRate = rate.rate
 //    //if (epsilon) {
 //      bigRate = bigRate.times(1-RATE_EPSILON)
 //    //}
 //    return {
 //      type: "EXCHANGE_FORM_SUGGEST_RATE",
 //      payload: {
 //        rate: bigRate.toString(10),
 //        reserve: rate.reserve,
 //        expirationBlock: rate.expirationBlock,
 //        balance: rate.balance.toString(10),
 //      },
 //      meta: id,
 //    }

	// return {
	// 	type: "EXCHANGE.UPDATE_RATE",
	// 	payload: rate
	// }				
}


export function openPassphrase(){
	return {
		type: "EXCHANGE.OPEN_PASSPHRASE",		
	}					
}

export function hidePassphrase(){
	return {
		type: "EXCHANGE.HIDE_PASSPHRASE",		
	}					
}