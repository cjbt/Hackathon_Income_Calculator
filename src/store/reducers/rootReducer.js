import {
  GET_INPUT_DATA,
  ANNUAL_EARNINGS_BEFORE,
  ANNUAL_EARNINGS_AFTER,
  LIFETIME_EARNINGS_BEFORE,
  LIFETIME_EARNINGS_AFTER,
  CUMULATIVE_EARNED_BEFORE,
  CUMULATIVE_EARNED_AFTER,
  RESET,
  TWEET_MSG,
  ISA_SALARIES,
  ISA_CALCULATOR,
  TOGGLE_EARNINGS,
  TOGGLE_ISA
} from "../actions/rootAction";

const initialState = {
  currentAge: null,
  retirementAge: null,
  beforeSalary: null,
  afterSalary: null,
  annualRaise: null,
  yearsOfWork: null,
  beforeEarnings: [],
  afterEarnings: [],
  beforeTotal: null,
  afterTotal: null,
  cumulativeBefore: [],
  cumulativeAfter: [],
  tweetMsg: "",
  isaPayments: [],
  tuitionTotal: null,
  paymentMonths: null,
  monthlyPayment: null,
  earningsOutput: true,
  isaOutput: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT_DATA:
      return {
        ...state,
        currentAge: action.payload.currentAge,
        retirementAge: action.payload.retirementAge,
        beforeSalary: action.payload.beforeSalary,
        afterSalary: action.payload.afterSalary,
        annualRaise: action.payload.annualRaise / 100,
        yearsOfWork: action.payload.retirementAge - action.payload.currentAge
      };

    case ANNUAL_EARNINGS_BEFORE:
      return {
        ...state,
        beforeEarnings: action.payload
      };

    case ANNUAL_EARNINGS_AFTER:
      return {
        ...state,
        afterEarnings: action.payload
      };

    case LIFETIME_EARNINGS_BEFORE:
      return {
        ...state,
        beforeTotal: action.payload
      };

    case LIFETIME_EARNINGS_AFTER:
      return {
        ...state,
        afterTotal: action.payload
      };

    case CUMULATIVE_EARNED_BEFORE:
      return {
        ...state,
        cumulativeBefore: action.payload
      };

    case CUMULATIVE_EARNED_AFTER:
      return {
        ...state,
        cumulativeAfter: action.payload
      };

    case RESET:
      return {
        currentAge: null,
        retirementAge: null,
        beforeSalary: null,
        afterSalary: null,
        annualRaise: null,
        yearsOfWork: null,
        beforeEarnings: [],
        afterEarnings: [],
        beforeTotal: null,
        afterTotal: null,
        cumulativeBefore: [],
        cumulativeAfter: [],
        tweetMsg: "",
        isaPayments: [],
        tuitionTotal: null,
        paymentMonths: null,
        monthlyPayment: null,
        earningsOutput: true,
        isaOutput: false
      };

    case ISA_CALCULATOR:
      return {
        ...state,
        monthlyPayment: action.monthlyPayment,
        isaPayments: action.isaPayments,
        tuitionTotal: action.tuitionTotal,
        paymentMonths: action.paymentMonths
      };

    case TWEET_MSG:
      return {
        ...state,
        tweetMsg: action.payload
      };

    case ISA_SALARIES:
      return {
        ...state,
        afterEarnings: action.payload
      };

    case TOGGLE_EARNINGS:
      return {
        ...state,
        earningsOutput: true,
        isaOutput: false
      };

    case TOGGLE_ISA:
      return {
        ...state,
        isaOutput: true,
        earningsOutput: false
      };

    default:
      return state;
  }
};

export default rootReducer;
