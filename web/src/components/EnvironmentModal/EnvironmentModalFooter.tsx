import {Button} from 'antd';

import * as S from './EnvironmentModal.styled';

interface IProps {
  isEditing: boolean;
  isLoading: boolean;
  isValid: boolean;
  onCancel(): void;
  onSave(): void;
}

const EnvironmentModalFooter = ({isEditing, isLoading, isValid, onCancel, onSave}: IProps) => (
  <S.Footer>
    <span>
      <Button type="primary" ghost onClick={onCancel}>
        Cancel
      </Button>
    </span>
    <span>
      <Button disabled={!isValid} htmlType="submit" loading={isLoading} type="primary" onClick={onSave}>
        {isEditing ? 'Update' : 'Create'}
      </Button>
    </span>
  </S.Footer>
);

export default EnvironmentModalFooter;
