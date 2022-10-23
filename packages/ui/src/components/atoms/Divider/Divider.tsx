import * as RadixDivider from '@radix-ui/react-separator';
import styled from 'styled-components';
import { slateDark } from '@radix-ui/colors';

type StyleProps = {
  margin?: string;
  color?: string;
};

const StyledDivider = styled(RadixDivider.Root)`
  background-color: ${(props: StyleProps) => props.color || slateDark.slate6};
  margin: ${(props: StyleProps) => props.margin};
  &[data-orientation='horizontal'] {
    height: 0.1rem;
    width: 100%;
  }
  &[data-orientation='vertical'] {
    height: 100%;
    width: 0.1rem;
  }
`;

type DividerProps = {
  orientation?: 'vertical' | 'horizontal';
  decorative?: boolean;
  asChild?: boolean;
  margin?: string;
  className?: string;
  color?: string;
};

export const Divider = ({
  orientation = 'horizontal',
  decorative = false,
  asChild = false,
  margin = '0rem',
  className,
  color,
}: DividerProps) => {
  return (
    <StyledDivider
      margin={margin}
      orientation={orientation}
      decorative={decorative}
      asChild={asChild}
      className={className}
      color={color}
    />
  );
};
