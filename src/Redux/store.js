import { reducer } from "./Reducer"
import {  createStore } from "@reduxjs/toolkit";

export const store= createStore(reducer)
