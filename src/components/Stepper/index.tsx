import type { ReactNode } from 'react';
import styled from 'styled-components';

import { formatNumberToTwoDigits } from '../../utils';

type Separator = 'line' | 'shevron';

interface StepData {
  step: number;
  title: string;
}

interface StepProps extends StepData {
  isHighlighted: boolean;
}

interface StepperProps {
  steps: StepData[];
  highlightStep: number;
  separatorType: Separator;
}

const Stepper = ({ steps, highlightStep, separatorType }: StepperProps) => {
  const makeSeparator = (separatorType: Separator) => {
    switch (separatorType) {
      case 'line':
        return <Line />;
      case 'shevron':
        return <Shevron />;
      default:
        return <Line />;
    }
  };

  const StepNodes = steps.reduce(
    (nodes, { step, title }) => {
      const isHighlighted = step === highlightStep;
      const hasSeparator = step !== steps[steps.length - 1].step;

      nodes.push(<Step isHighlighted={isHighlighted} key={step} step={step} title={title} />);
      if (hasSeparator) nodes.push(makeSeparator(separatorType));
      return nodes;
    }, [] as ReactNode[]);

  return (
    <StepperContainer>
      {StepNodes}
    </StepperContainer>
  );
};

const Step = ({ step, title, isHighlighted }: StepProps) => (
  <StepContainer>
    <StepLabel $isHighlighted={isHighlighted}>
      {formatNumberToTwoDigits(step)}
    </StepLabel>
    <StepLabel $isHighlighted={isHighlighted}>
      {title}
    </StepLabel>
  </StepContainer>
);

const StepperContainer = styled.ul`
    display: flex;
    padding: 20px 0;
    background-color: ${(props) => props.theme.color['surface-dark']};
`;

const Line = styled.div`
    width: 1px;
    background-color: ${(props) => props.theme.color['border-dark']};
`;

const Shevron = styled.div`
    content: "";
    width: 8px;
    height: 8px;
    border: 1px solid rgba(0, 0, 0, .5);
    border-left: 0;
    border-bottom: 0;
    transform: rotate(45deg);
    line-height: 1;

    align-self: center;
`;

const StepContainer = styled.li`
    padding: 0 48px;
    display: flex;
    gap: 20px;
`;

const StepLabel = styled.span<{ $isHighlighted: boolean }>`
    ${(props) => props.theme.typo.body1};
    color: ${(props) => props.$isHighlighted 
      ? props.theme.color['text-default'] : props.theme.color['text-disabled']};
`;

export default Stepper;
