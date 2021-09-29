from behave import *
import nth
use_step_matcher('re')

@given(u'we have an array and two integers')
def step_impl(context):
    context.array = ['a', 'b', 'c', 'd']
    context.a = 1
    context.b = -2
 
@when(u'we implement a test')
def step_impl(context):
    context.result1 = nth.nth(context.array, context.a)
    context.result2 = nth.nth(context.array, context.b)

@then(u'behave will test for us')
def step_impl(context):
    assert (context.result1 == 'b')
    assert (context.result2 == 'c')
