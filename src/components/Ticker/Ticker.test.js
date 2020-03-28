import React from 'react';
import Ticker from "./Ticker";
import { shallow } from 'enzyme';

it("shows buy when price less then 1000", () => {
  const component = <Ticker price={700} pair="DEMO/DEMO2"/>;
  const tree = shallow(component);
  tree.find("input").simulate('change');
  expect(tree.find("button").hasClass("buyIndicator")).toBeTruthy();
});

it("does not show buy when price is higher than 1000", ()=>{
  const component = <Ticker price={2000} pair="DEMO/DEMO2"/>;
  const tree = shallow(component);
  expect(tree.find("span")).toHaveLength(0)
});

it('does not shows buy button by default',()=>{
  const component = <Ticker price={2000} pair="DEMO/DEMO2"/>;
  const tree = shallow(component);
  expect(tree.find("button")).toHaveLength(0)
});

it('shows buy button if I agreed', () => {
  const component = <Ticker price={700} pair="DEMO/DEMO2"/>;
  const tree = shallow(component);
  tree.find("input").simulate('change');
  expect(tree.find('button')).toHaveLength(1);
});
it('should call function when buy button clicked', () => {
  const buyFn = jest.fn();
  const component = <Ticker price={700} pair="DEMO/DEMO2" buy={buyFn}/>;
  const tree = shallow(component);

  tree.find("input").simulate('change');
  tree.find("button").simulate('click');

  expect(buyFn).toHaveBeenCalled();
});