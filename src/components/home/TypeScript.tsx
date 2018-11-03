import * as React from 'react';
import typescript from '../../../root/video/typescript.mp4';
import { Code, TryItOut } from '../../elements';
import { AssetSectionGrid } from '../../layout';
import { Video } from './Video';

export function TypeScript() {
  return (
    <AssetSectionGrid title="TypeScript" bg="darkLight" asset={<Video src={typescript} />} reverse>
      <div>
        NEO•ONE's first class TypeScript integration means that smart contracts are strongly typed and will never leave
        you guessing at what's supported. Client APIs for interacting with smart contracts are generated automatically,
        including helper components for integrating with a React application.
      </div>
      <div>
        <TryItOut /> Make a change to the argument or return types of a public method on one of the smart contracts,
        build, and then check the results under <Code>one/generated</Code>
      </div>
    </AssetSectionGrid>
  );
}
