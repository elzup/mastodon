class AddInfosToStatuses < ActiveRecord::Migration[5.0]
  def change
    add_column :statuses, :lat, :decimal, :precision => 17, :scale => 14
    add_column :statuses, :lon, :decimal, :precision => 17, :scale => 14
    add_column :statuses, :process, :integer
  end
end
