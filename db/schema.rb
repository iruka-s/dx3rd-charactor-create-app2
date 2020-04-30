# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_30_054537) do

  create_table "armors", force: :cascade do |t|
    t.text "name"
    t.text "sort"
    t.text "dodge"
    t.text "action_point"
    t.text "armor_point"
    t.text "purchase_point"
    t.text "standby_point"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "awakenings", force: :cascade do |t|
    t.text "name"
    t.text "erosion_point"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "effects", force: :cascade do |t|
    t.text "syndrome"
    t.text "name"
    t.text "max_level"
    t.text "timing"
    t.text "skill"
    t.text "difficulty"
    t.text "target"
    t.text "range"
    t.text "erosion_point"
    t.text "limit"
    t.text "count"
    t.text "other"
    t.text "sort"
    t.text "effect_sort1"
    t.text "effect_content1"
    t.text "effect_sort2"
    t.text "effect_content2"
    t.text "effect_sort3"
    t.text "effect_content3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "impulses", force: :cascade do |t|
    t.text "name"
    t.text "erosion_point"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.text "name"
    t.text "sort"
    t.text "skill"
    t.text "purchase_point"
    t.text "standby_point"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "negative_emotions", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "positive_emotions", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "syndromes", force: :cascade do |t|
    t.text "english_name"
    t.text "name"
    t.text "body"
    t.text "sense"
    t.text "spirit"
    t.text "society"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.text "name"
    t.text "sort"
    t.text "skill"
    t.text "hit"
    t.text "offensive_power"
    t.text "guard_point"
    t.text "range"
    t.text "purchase_point"
    t.text "standby_point"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "works", force: :cascade do |t|
    t.text "name"
    t.text "ability"
    t.text "skill1"
    t.text "value1"
    t.text "skill2"
    t.text "value2"
    t.text "skill3"
    t.text "value3"
    t.text "skill4"
    t.text "value4"
    t.text "skill5"
    t.text "value5"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
