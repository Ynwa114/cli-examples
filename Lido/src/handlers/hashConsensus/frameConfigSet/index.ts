import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";
import { ILidoOracleConfig, LidoOracleConfig } from "../../../types/schema";
import { _loadLidoOracleConfigEntity } from "../../../helpers";

/**
 * @dev Event::FrameConfigSet(uint256 newInitialEpoch, uint256 newEpochsPerFrame)
 * @param context trigger object with contains {event: {newInitialEpoch ,newEpochsPerFrame }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const FrameConfigSetHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets
) => {
  // Implement your event handler logic for FrameConfigSet here

  const { event, transaction, block, log } = context;
  const { newInitialEpoch, newEpochsPerFrame } = event;

  const lidoOracleConfigDB = bind(LidoOracleConfig);

  let entity: ILidoOracleConfig =
    await _loadLidoOracleConfigEntity(lidoOracleConfigDB);

  //require some correction-----> help

  entity.epochs_per_frame = newEpochsPerFrame;

  await lidoOracleConfigDB.save(entity);
};
