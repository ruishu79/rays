<style>
.rs_checkbox_wrapper {
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 0;

}
.rs_checkbox_input {
    opacity: 0;
    display: none;
}
.rs_checkbox_inner {
    background: #fff;
    position: relative;
    display: inline-block;
    height: 18px;
    width: 18px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    cursor: pointer;
    top: 3px;
}
.rs_checkbox_inner:hover{
    border: 1px solid #1ABC9C;
}
.rs_checkbox_inner_icon {
    position: absolute;
    color: #fff;
    font-size: 11px;
    width: 12px;
    height: 12px;
    line-height: 12px;
    opacity: 0;
    text-align: center;
    transition: opacity .2s;
    margin-left: -6px;
    margin-top: 3px;
    cursor: pointer;
}
.rs_checkbox_inner.selected .rs_checkbox_inner_icon{
    opacity: 1;
}
.rs_checkbox_inner.selected {
    background: #1ABC9C;
    border: 1px solid #1ABC9C;
    &:hover {
        opacity: 0.8;
    }
}

.rs_checkbox_inner.disabled {
    background: #eaeaea;
}
</style>
<template>
    <label class="rs_checkbox_wrapper">
        <div class="rs_checkbox">
            <span 
                class="rs_checkbox_inner"
                :class="{
                    'selected': checkbox.checked,
                    'disabled': checkbox.disabled
                }"
            >
                <i class="rs_checkbox_inner_icon fa fa-check"></i>
                <input 
                    type="checkbox" 
                    :value="checkbox.checked"
                    class="rs_checkbox_input"
                    @change="changeAction"
                >
            </span>
            <span>{{checkbox.text}}</span>
        </div>
    </label>
</template>
<script>
export default {
    props: {
        checkbox: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeAction () {
            if (!this.checkbox.disabled) {
                this.checkbox.checked = !this.checkbox.checked
            }
            if (this.checkbox.change) {
                this.checkbox.change()
            }
            this.$dispatch('child-change')
        }
    }
}
</script>