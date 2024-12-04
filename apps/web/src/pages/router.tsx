import { Route, Switch } from 'wouter'

import { RootLayout } from '@app/layouts/root-layout'

import { Recruitment } from '@app/pages/recruitment'
import { Job } from '@app/pages/recruitment/job'
import { SignIn } from '@app/pages/sign-in'
import { SignUp } from '@app/pages/sign-up'

export function Router() {
  return (
    <Switch>
      <Route path="/">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/app" nest>
        <RootLayout>
          <Route path="/recruitment">
            <Recruitment />
          </Route>

          <Route path="/recruitment/:job_id">
            <Job />
          </Route>
        </RootLayout>
      </Route>
    </Switch>
  )
}
