import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Onboarding from './Onboarding';

Given('I am on Onboarding page',()=>{
    Onboarding.fillInput();
});