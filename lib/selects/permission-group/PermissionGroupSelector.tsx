import { forwardRef } from 'react';
import { Select, type SelectProps } from '../../components/Select/Select';

export type PermissionGroupSelectorProps = Omit<SelectProps, 'optionsEndpoint'>;

// Pre-configured Select for a version's permission groups; scope with params={{ versionId }}.
export const PermissionGroupSelector = forwardRef<HTMLButtonElement, PermissionGroupSelectorProps>((props, ref) => (
  <Select
    ref={ref}
    label="Group"
    placeholder="No group"
    searchable
    clearable
    optionsEndpoint="select-api/permission-groups"
    fieldKeys={{ valueKey: 'id', labelKey: 'label', descriptionKey: 'code', additionalKeys: 'code' }}
    {...props}
  />
));
PermissionGroupSelector.displayName = 'PermissionGroupSelector';
